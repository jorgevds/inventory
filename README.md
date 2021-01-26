This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Inventory

Inventory is a straightforward grocery shopping list app! It is built in Next.js with TypeScript, TailwindCSS, and Firebase.

It uses ES6 syntax, custom Props and Interfaces, ...

![Hooks AND TypeScript?! What a legend!](https://user-images.githubusercontent.com/54646908/104955240-2ee5a580-59ca-11eb-9680-a32966ed7b60.png)
###### Hooks AND TypeScript?! What a legend! :eyes:

... and React hooks! Using Next.js allows for a cleaner Router setup, as well as some even more interesting features such as server-side rendering, improved file structure, and the use of out of the box backend API creation!

![A custom API in Next.js: clean, easy, and no fuss](https://user-images.githubusercontent.com/54646908/104955230-2c834b80-59ca-11eb-9fe8-39259b6a4910.png)
###### A custom API in Next.js: clean, easy, and no fuss :sunglasses:

The app uses TailwindCSS as its styling library. Using TailwindCSS makes for a clean and integrated developing experience. But also needs some tinkering for more custom layouts. To ensure a sleek Inventory layout, the app uses a custom config file to specify color variables, media queries, fonts, and a bunch of other stuff!

![Custom Tailwind config because we're special like that](https://user-images.githubusercontent.com/54646908/104955238-2ee5a580-59ca-11eb-8a0d-03300deefadd.png)
###### Custom Tailwind config because we're special like that :nerd_face:


### Easy

The goal of Inventory is to be easy to use. The end user only has to enter an email address and password to get started: no email confirmation or waiting period required. Once the user is logged in, they can get started!

![Seamless signin signals surreptitiously sent so sorrows stay sundered](https://user-images.githubusercontent.com/54646908/104955235-2db47880-59ca-11eb-86c3-1c2f94b488d2.png)
###### Seamless signin signals surreptitiously sent so sorrows stay sundered :email:

The primary goal of Inventory is to help you manage your stocks first: everything inside your fridge, your pantry, your cupboard, your garage, and so on. With careful, yet easy revision whenever you choose, your grocery list will be made automatically! Once the items in your supplies reach 0, they'll be printed to the Groceries tab. You can easily access this tab while in the store, or shortly before, and get an overview of everything you no longer have at home!


### Notifications

Inventory is very receptive to feedback. Anytime an significant enough action is taken by the user, a toast notification appears. 

![Toast notifications... but no actual toast](https://user-images.githubusercontent.com/54646908/104955243-3016d280-59ca-11eb-8db4-4c6aa76ba399.png)
###### Toast notifications... but no actual toast :bread:

Sometimes Inventory goofs, or gaffs, or make a mistake, and it errors out. But no fear! ~~When~~Rather, **if** that should happen, a toast notification will pop up to let you know!

### Secure

Because the database is Firebase, the app is totally secure. Others can't access any of your information by accessing the app. The only people authorised to change your Inventory items, are the registered users that are the respective owners of their accounts. There's also no risk of anyone hacking into the database because of the proper use of environment variables in the code.

![Can't open the doors without all the keys](https://user-images.githubusercontent.com/54646908/104955245-3016d280-59ca-11eb-8207-1563f59866fa.png)
###### Can't open the doors without all the keys :fire:


### Even securer

Besides the fact that the API keys are **not** exposed... well... anywhere, the website itself also has security measures in place to protect against malicious attacks. The Firebase rules are set up to where unauthorised users can't access any of the data on the database. And the only possible leak where unauthorised users can interact with the app, is protected with Google's Recaptcha service.

![So small it's almost invisible](https://user-images.githubusercontent.com/54646908/104955225-2b521e80-59ca-11eb-8b2f-d5052204963c.png)
###### So small it's almost invisible :mouse:

And yes, these API keys are also protected via environment variables.


### Conclusion

These are some of the more important features in Inventory. The app and its landing page are of course also fully responsive, SEOptimised, fast, Lighthouse certified, ...

and did we mention... **free**?


#### Join the silent revolution for digital grocery lists now! Sign up to Inventory today and enjoy all the benefits it has to offer!


### What I can still do

- [ ] First, I'd like to overhaul the authentication system. Instead of checking for an active user on every relevant component, I could create a Wrapper with React Context, handle the authentication in that wrapper, and then wrap every relevant component in that context provider component. I have a pretty good direction on how to proceed with this, so hopefully that will be a chance I implement soon.

- [ ] Second, one nice feature I've kind of missed during the holidays was the ability to make a one-off custom grocery list. Basically, you list stuff you only want for a day or a week and once you buy all of the items, the list gets deleted. Would be a good use of Firebase transactions if I were to implement this still.

- [ ] Third, related to number two, would be to change the writes to the Firestore database. I know of a couple of ways the number of writes can be significantly reduced, I think, but I haven't really implemented them for... some reason. Time crunch? In any case, I think it would make more sense to have the Inventory screen have a toggle button on the top and bottom right of the list, where the data goes from read only to writeable, and then users can increment/decrement and/or delete. Once some type of submit signal is sent, the data reverts to read only and only then do all the edits go through. This would also be a transaction. Before I implement this, I would need to know if transaction/batch writes count as one single write or as n number of writes depending on how many documents were edited.

- [ ] Fourth, again similar to before, is the data presentation. Right now, every document is mapped over in the Inventory screen, meaning every line of data is one read. Instead, I would like to collect all of the data in one big document somehow, maybe via Firebase Functions, and then only present that singular document. I don't know if this would really even be possible for a to do list app, but it would cut down on the number of reads significantly, especially on scale. It would also give it a nice performance boost; I think currently the map is O(n), but so only rendering one big document would hopefully make it O(log n), possibly even O(1).

Definitely a very good learning experience. I wrote all or most of the code myself for this one and didn't follow a tutorial. Nope. No siree, not one. Learned about Firebase, to do lists in React, more TypeScript, and Tailwind. I also learned how to set up Recaptcha for future use and Toastify as a handy toast notification library. For sure, there's a lot more to learn, not just in future tech, but also in polishing the final product. Design wise, I'm sure there's a lot of tweaks and improvements to be made. Performance wise, even though it is a very simple and thereby fast app, there's probably more work to do. But yeah, certainly happy with how it turned out: one useable app, with user authentication and securities in place, from start to finish, and with room to grow!
