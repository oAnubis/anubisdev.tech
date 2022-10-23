---
layout: "../../layouts/post-school.astro"
title: "Why the War on Game Tools is a Misfire"
description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit"
shortdesc: "Lorem ipsum dolor sit amet"
pubDate: "Oct 22 2022"
heroImage: "../../assets/blogs/post_1/AIProgrammer.png"
tags:
    Brandon Coburn --
    English Composition --
    Show What You Know
author1: Francis,B.
---
<style>

    main{
        display: flex;
        justify-content: center;
    }

    .hero-container{
        padding-top: 2rem;
        display:flex;
        justify-content: center;
    }

    .hero-image{
        width:auto;
        height:auto;
    }

    .article{
        display: grid;
        width: 90%;
    }

    .image {
        max-width: 100%;
    }

    .images {
        display: flex;
        justify-content: center;

    }

    .wrapper{
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 1em;
    }

    .section-title{
        font-size: 20px;
        font-weight: bold;
        color: #3582a6;
    }

    .references{
				margin-top: 2em;
				border-top: 1px solid #DDD;
			}
    
    .reference{
        
        
    }
</style>
We see it all the time, in movies, commercials, and even the news, AI is bad. But is it really? As a Game Developer, I’m  inclined to say no, I want more! The game industry is fraught with the notion that AI tools used to generate content are destroying uniqueness in current video games being created by removing the human element in key parts of the development cycle. From a purely technical standpoint this holds little possibility, they are designed specifically for uniqueness, which actually makes it more difficult to generate a full set of coherent concept art. Now, on a side everyone can relate to is price; they are not cheap, either the hardware to run them efficiently in the first place is tremendously expensive or the price to generate even one image will add up, I will dive into the latter in more detail in a bit. What about the future as prices go down? Fear not fellow gamers and developers, the human element is still very much involved in the process the tools are “replacing”, as I will explain.
</br>
</br>
<h1 class="section-title">AI content creators are designed for uniqueness</h1>  
<section class="images">
<div class="wrapper">
    <div class="image-container">
        <img class="image" src="../../assets/blogs/post_1/Wizard_1.jpeg"/>
    </div>
    <p>Wizard 1</p>
</div>
<div class="wrapper">
    <div class="image-container">
        <img class="image" src="../../assets/blogs/post_1/Wizard_2.jpeg"/>
    </div>
    <p>Wizard 2</p>
</div>
<div class="wrapper">
    <div class="image-container">
        <img class="image" src="../../assets/blogs/post_1/Wizard_3.jpeg"/>
    </div>
    <p>Wizard 3</p>
</div>
</section>
I generated the three images above using an AI tool called Stable Diffusion. I ran the program three times using the prompt "wizard casting a fireball spell, detailed, realistic". As you can see, I received three entirely different wizards, pretty cool right? Well, yes it is cool, however, this makes it quite difficult to generate new concept art from the ground up when every image is randomly generated. A typical video game requires hundreds, if not thousands of concept art images, this would be hard to compile a complete set given the randomness in output for these AI tools.
</br>
</br>
<p>
Oliver Mackenzie(2022) had a similar experience in his <a href="https://www.eurogamer.net/digitalfoundry-2022-just-how-good-are-the-new-wave-of-ai-image-generation-tools">article on AI tools</a> stating, "Actually working out a coherent aesthetic across multiple pieces of artwork can be tricky". (para. 14) Indeed, this could end up being extremely time consuming as it sits right now. Stable Diffusion utilizes the GPU (Graphics Processing Unit) to render these new images, it took roughly 10 seconds to create each of the three images above. Imagine 10 seconds per image, you need 100 similar images, only 1 in 50 would fit together. I'll save you time, that would take roughly 13.8 hours. That time is only the processing time, this does not count how long it would take to parse through and select the images, which would add much more to that time.
<p>
</br>
</br>
<h1 class="section-title">AI tools are quite pricey!</h1>
A topic everyone can relate too regardless of your field is price, what do they cost? Well, as I stated above, Stable Diffusion can run directly on your machine and the program itself is free, that's pretty low cost right? Well, not really, to run efficiently the program requires a pretty beefy GPU, I am using an RTX 2080 Ti which you can get for around $700. That is not exactly a small investment just to run a tool locally (especially if you need to build a new PC instead of just a better GPU). Well what about online options so you don't need to build a new PC? The biggest player is DALL-E, it can be operated purely online no "monster" PC needed. Two problems, the tool is invite only, and it is $0.10 per image. Let's say you are able to get an invite, taking from our previous example of 1 in 50 with 100 images needed, roughly 5,000 images would be required to be generated, this would be $500. Not exactly a better option, you can see how that would add up quickly, especially if you needed more art, or if your chances fall outside the average. 
</br>
</br>
<h1 class="section-title">Humans are very much still involved in the design process, and will be for some time.</h1>
One of the loudest arguments against these AI tools is the potential to replace the human element in the design process. Obviously computers do not possess real imagination to the depth of humans, which does limit the creativity aspect severely. 
</br>
</br>
<p>
Bryant Francis(2022) expresses this quite nicely in his <a href="https://www.gamedeveloper.com/blogs/games-and-game-tools-are-becoming-more-frictionless-that-might-be-a-bad-thing">article</a> when he says "games will risk losing the spontaneity that can come with working through a performance in a V.O. booth." (para. 48)
</br>
</br>
I think that is a valid concern, however, a human still needs to run these tools, the same process could be followed, editing together output from these tools. Unless the entire process of developing a video game becomes AI (I hope not) that human element in creativity and imagination will still very much be present, think of it as more of an augmentation than a full replacement. As with everything, there is a potential for overuse, which could lead to some really dull or otherwise stale creations, but gamers are not known to be silent with their criticisms, thinking back to the launch of No Man's Sky by Hello Games confirms this. I think that market dynamic will be a huge driving force that will keep the usage in the grand scale balanced.
</p>
</br>
</br>
<h1 class="section-title">Beautiful future on the horizon</h1>
Between the sheer cost to run these tools for full production, the time taken to do so, and the fact it still requires a human in the process points to an great future both for video games and for the developers creating them. The tools as demonstrated still provide a distinct uniqueness, even given the same parameters, which naturally lends to uniquness in their application in each game made using the tools. When we add in human involvment into the mix, and their ability to take an output and manually adjust, it further negates the fear these tools will lead to "carbon copies". Can it happen? Sure, but that would be a human putting together a carbon copy as opposed to the tools doing it, not exactly the fault of the tool itself. As a developer with little artisic ability, I am excited in their future, they will alleviate a large roadblock I face when creating a new video game, creating new art. My responibility as well as other developers is to utilize the tools appropriately, though given the tools constraints and the consumers in the industry, I do not think this will be too difficult.
<div class="references">
    <h1 class="section-title">References</h1>
    <ol>
    <li>
    1. Mackenzie, O. (2022, September 18). <a href="https://www.eurogamer.net/digitalfoundry-2022-just-how-good-are-the-new-wave-of-ai-image-generation-tools">Just how good are the new wave of AI image generation tools?</a> <cite>Eurogamer.</cite> Retrieved on Oct 22, 2022.
    </li>
    <li>
    2. Francis, B. (2022, September 27). <a href = "https://www.gamedeveloper.com/blogs/games-and-game-tools-are-becoming-more-frictionless-that-might-be-a-bad-thing">Games and game tools are becoming more frictionless. Is that a bad thing?</a> <cite>Game Developer.</cite> Retrieved on Oct 22, 2022.
    </li>
    </ol>
</div>