Recap: Semantic HTML

Overview
In this reading, you will recap semantic HTML. The revision topics in this reading are from the HTML and CSS in-depth course from the Front-End developer program, with a particular focus on the Semantic and Meta tags lesson in the HTML in-depth module.

What are semantic tags?
Semantic tags are a way to describe the meaning of your web page through tags. For example, older, non-semantic HTML used the following HTML structure to style a main menu section of a web page:

<div>    
  <ul>
    <li><a href="/home">Homepage</a></li>        
    <li><a href="/about">About Us</a></li>
    <li><a href="/blog">Blog</a></li>  
  </ul>
</div>

The above structure is not signaling that it's a menu for navigation in any way. Instead, to create a more semantic HTML structure, you replace the <div> element with the HTML5 <nav> element.

<nav>    
  <ul>
    <li><a href="/home">Homepage</a></li>        
    <li><a href="/about">About Us</a></li>
    <li><a href="/blog">Blog</a></li>  
  </ul>
</nav>

The code example above is a better way to signal intent. Let’s explore why.

The nav versus div elements
In the example above, the <nav> element describes the meaning of the particular section of the webpage as the element itself is meant to be used to contain some kind of navigation. However, a <div> tag is just there to group any collection of HTML elements when there is no better (more semantic) way to group them. This means that the <div> tag is less semantic or less meaningful. In other words, it conveys less meaning about what exactly the given HTML snippet's role and purpose is. The <nav> tag is more semantic because it signals that the given structure is meant to be used as some sort of navigation menu. This is a simple but effective example for reminding you what semantic HTML is all about.

Metadata and meta tags
To further revise the purpose of semantic HTML, please revisit the following lesson items from the HTML and CSS in-depth course:

Metadata - https://www.coursera.org/learn/html-and-css-in-depth/lecture/EeFw9/metadata

Metadata cheat sheet - https://www.coursera.org/learn/html-and-css-in-depth/supplement/8QDS1/metadata-cheat-sheet

It's important to remember that <meta> tags are tags that contain data about a given web page. They are used to define SEO-relevant data, responsive and mobile behavior of a given web page, encoding and more.

The role attribute

The role attribute is another tool you have at your disposal when writing semantic HTML. The role attribute describes the role of an element in a web page. This attribute is global meaning you can use it on any element. While many elements have implicit roles, you can make them explicit by adding a role attribute.

<a href="/book" role="button">Book a table</a>

Conclusion

In this reading, you revisited the concept of semantic tags in HTML and the role attribute. Following this quick revision of semantic HTML, including meta tags, you should be ready to complete the exercise in the next lesson item, which involves setting up the HTML document for the Little Lemon web app.
