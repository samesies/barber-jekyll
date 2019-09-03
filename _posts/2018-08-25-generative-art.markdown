---
layout: post
title: "Generative art (2019)"
date: 2018-09-01
description:
image: /assets/images/img-genarts.png
author: Sourya Sen
tags:
  - openFrameworks
  - Generative Art
---

As part of independent studies in generative art, I was actively developing small animations in openFrameworks. Some of the sets are presented here with a brief description of the process behind the approaches.

### The Ones With the Lines
![lines00](/assets/images/genlines00.png)

![lines01](/assets/images/genlines01.png)

![lines02](/assets/images/genlines02.png)

![lines03](/assets/images/genlines03.png)

![lines04](/assets/images/genlines04.png)

![lines05](/assets/images/genlines05.png)

These were explorations of the equation for a line and collision detection algorithms. Essentially, different lines are generated with a set of random and pseudo random origin and directions and are left to grow. Once they collide or intersect with another line, further generations take place, which vary between the different versions presented. For example, in one of the sets, new lines are generated from the mid point of intersecting line at right angles. The new lines follow the same rules of collisions and the the sets are completed once there is no space left for new lines to be generated.

### The Ones With the Symbols
![symbols00](/assets/images/gensym00.png)

![symbols01](/assets/images/gensym01.png)

![symbols02](/assets/images/gensym02.png)

These symbols are all generated with various different rule sets but with similar approaches. For each, a grid is taken and its points are iterated over selecting whether to draw a line from the said point or not, and if yes, to which point. With various different permutations and combinations of available grid points and variations in logic for selecting them, a different symbol is generated every time these algorithms are run.

### The Ones with the Colours and Forms
![forms00](/assets/images/genform00.png)

![forms01](/assets/images/genform01.png)

Based on simple geometric functions, these pseudo three dimensional forms are all generated with multiple shapes drawn in close proximity with each other with a differing sizes, offsets and colour channels. These were the foundations behind the shapes generated for the [Aalto Day One project](/aalto-day-one) and the Github repository linked in the same has more details behind the algorithms.

Additionally, some are also presented in the [ofxCurve](/ofxCurve) post.
