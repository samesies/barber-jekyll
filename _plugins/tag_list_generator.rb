module Jekyll

  module Tagslist

    class TagslistTag < Liquid::Tag

      def initialize(tag_name, text, tokens)
        super
        @text = text
        @threshold = 1
        @order_by = "asc"
        @sort_by = "count"
        @limit = 0
        parse_params
      end

      def render(context)
        tags = context.registers[:site].tags.map do |tag, posts|
          [tag, posts.count] if posts.count >= @threshold
        end

        tags.compact!

        tags.sort! do |tag1, tag2|
          sort_seq = 0
          if @sort_by.eql? "name"
            sort_seq = 0
          elsif @sort_by.eql? "count"
            sort_seq = 1
          end

          if @order_by.eql? "asc"
            tag1[sort_seq] <=> tag2[sort_seq]
          else
            tag2[sort_seq] <=> tag1[sort_seq]
          end
        end

        html = "<ul class=\"footer__tags\">"

        tag_count = 1

        tags.each do |tag, count|
          if tag_count > @limit && @limit != 0
            break
          end
          html << "<li><a class=\"footer__link\" href=\"/tag/#{tag.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')}\">#{tag.split.map(&:capitalize)*' '}</a></li>"
          tag_count = tag_count + 1
        end

        html << "</ul>"
      end

      private

      def parse_params
        params = @text.split(",")
        params.each do |param|
          key_vals = param.split("=>", 2)
          param_name = key_vals[0].strip
          param_value = key_vals[1].strip

          if param_name.eql? ":threshold"
            param_value = param_value.to_i
            @threshold  = param_value if param_value > 0
          elsif param_name.eql? ":order_by"
            @order_by = "desc" if param_value.eql? "desc"
          elsif param_name.eql? ":sort_by"
            if param_value.eql? "count"
              @sort_by = "count"
            else
              @sort_by = "name"
            end
          elsif param_name.eql? ":limit"
            param_value = param_value.to_i
            @limit = param_value if param_value > 0
          else
            next
          end
        end
      end

    end

  end

end

Liquid::Template.register_tag('tags_list', Jekyll::Tagslist::TagslistTag)
