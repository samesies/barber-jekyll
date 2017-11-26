module Jekyll

  class GenerateAuthor < Generator
    safe true

    def generate(site)
      if site.layouts.key? "author"
        site.write_author_indexes
      end
    end
  end

  class AuthorIndex < Page
    def initialize(site, base, author_dir, author)
      @site = site
      @base = base
      @dir  = author_dir
      @name = "index.html"

      self.process(@name)
      self.read_yaml(File.join(base, "_layouts"), "author.html")
      self.data["author"] = author
    end
  end

  class Site
    def write_author_index(author_dir, author)
      index = AuthorIndex.new(self, self.source, author_dir, author)
      index.render(self.layouts, site_payload)
      index.write(self.dest)
      self.pages << index
    end

    def write_author_indexes
      author_dirs_written = []

      dir = "author"
      self.posts.docs.each do |post|
        post_authors = post.data["author"]
        if String.try_convert(post_authors)
             post_authors = [ post_authors ]
        end
        post_authors.each do |author|
          author_dir = File.join(dir, author.downcase.strip.gsub(" ", "-").gsub(/[^\w-]/, ""))
          if not author_dirs_written.include?(author_dir)
            author_dirs_written.push(author_dir)
            self.write_author_index(author_dir, author)
          end
        end unless post_authors.nil?
      end
    end
  end

end
