# Chapter 6 - The Request and Response Objects

* The important details of the request and response objects.

## Parts of a URL
* Protocol === determines how the reques will be transmitted === (http/https/ftp/sftp)
  
* Host === identifies the server either by one word or numeric IP address === (.com/ .net)
  
* Port === Each server has a collection of numbered ports
  * Port 80 is HTTP
  * Port 443 is HTTPS
  * Always use a port greater than 1023
  
* Path === first part of the URL and the directory path to the page or resource
  
* Querystring === optional collection of name/value pairs
  * Starts with a question mark (?)
  * name/value pairs are separated by ampersands (&) and URL encoded
  * Plus signs replace spaces
  * Special characters replace numeric character references
  * querystrings referred to as (search string or search)
  
* Fragment (hash) === strictly used by the browser
  * Single-page applicatins use the fragment to control application navigation
  * Sole purpose to cause the browser to display a specific part of the document, marked by an anchor tag
    * `<a id="chapter06">`

## HTTP Request Methods
* defines a collection of request methods (often referred to as HTTP verbs) that a client uses to communicate with a server.
  
  ** METHODS **
  * GET
  * POST
  * 