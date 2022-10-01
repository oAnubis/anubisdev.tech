---

layout: ../../layouts/project.astro
title: Game Of Life (Cellular Automata)
client: Self
publishDate: 2020-03-02 00:00:00
img: ../../assets/GOL.png
description: |
  My version of John Conway's Game of Life Cellular Automata, taking a heavily Object-Oriented approach. (WIP)
tags:
- -oop- 
- -winforms-
- -Project-
- -WIP-
---

This project was very interesting, first it explores a simulation of an organic system contained within a machine.
It is amazing to me that only 4 simple rules can produce such varied and fascinating results. 4 rules and a program is created that cannot be predicted, there exists no algorithm that can predict the exact results based on its initial state, incredible!
\
\
Ok, enough of that, lets dive into the code, which as a developer I found especially engaging, a few new concepts learned, deeper understanding of methodologies for problem solving, always a good thing.
\
\
This project is an a great choice to take a Object-Oriented(OOP) approach to solve, breaking up the program into smaller pieces with single responsibilities, a key pillar of OOP. I plan on refactoring a lot of the code currently in this project ass I add features and enable better scaling. I created a number of classes which is listed below:

1. Cell - Each individual rectangle in the grid is an instance of this class.
2. Universe - Holds the logic for the Grid and the Container for the Cells, in this case a 2D array of Cells.
3. Game - Holds the bulk of the games logic, such as rules and grid handling.
4. Each Modal Dialog is its own Class, was easier initially to handle each separate.

\
I intend on switching the Container from Array to a List, refactoring the code to accept that new container, I am curious of the impact that will have on the performance. I also want to further separate the classes to better adhere to single responsibility. I also have some features I want to add which I will list below.

1. Max life cycle - Each cell can die of old age (Better models the cellular decay as it exists in the universe).
2. Program Theming - Dark mode, Sepia, custom theming (More experience with the UI/UX).
3. A different set of CA rules that can be selected (More problems = more learning).
4. The ability to directly import from the Lexicon site.

\
I will regulary update the ReadMe in the project as I make progress, this will then be pushed to this page, which I will prepend to this post.


