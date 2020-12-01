This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Inventory

Inventory is a straightforward grocery shopping list app! It is built in Next.js with TypeScript, TailwindCSS, and Firebase.

It uses ES6 syntax, custom Props and Interfaces, ...

![Hooks AND TypeScript?! What a legend!](https://user-images.githubusercontent.com/54646908/100668795-c4ff3700-335c-11eb-92fd-4f30cfb4b1e2.png)
###### Hooks AND TypeScript?! What a legend! :eyes:

... and React hooks! Using Next.js allows for a cleaner Router setup, as well as some even more interesting features such as server-side rendering, improved file structure, and the use of out of the box backend API creation!

![A custom API in Next.js: clean, easy, and no fuss](https://user-images.githubusercontent.com/54646908/100668794-c4ff3700-335c-11eb-9722-6109654e0b69.png)
###### A custom API in Next.js: clean, easy, and no fuss :sunglasses:

The app uses TailwindCSS as its styling library. Using TailwindCSS makes for a clean and integrated developing experience. But also needs some tinkering for more custom layouts. To ensure a sleek Inventory layout, the app uses a custom config file to specify color variables, media queries, fonts, and a bunch of other stuff!

![Custom Tailwind config because we're special like that](https://user-images.githubusercontent.com/54646908/100668777-c2044680-335c-11eb-93fb-6dc2c40adbb2.png)
###### Custom Tailwind config because we're special like that :nerd_face:


### Easy

The goal of Inventory is to be easy to use. The end user only has to enter an email address and password to get started: no email confirmation or waiting period required. Once the user is logged in, they can get started!

![Seamless signin signals surreptitiously sent so sorrows stay sundered](https://user-images.githubusercontent.com/54646908/100669533-d39a1e00-335d-11eb-94e4-eefa2488b416.png)
###### Seamless signin signals surreptitiously sent so sorrows stay sundered :email:

The primary goal of Inventory is to help you manage your stocks first: everything inside your fridge, your pantry, your cupboard, your garage, and so on. With careful, yet easy revision whenever you choose, your grocery list will be made automatically! Once the items in your supplies reach 0, they'll be printed to the Groceries tab. You can easily access this tab while in the store, or shortly before, and get an overview of everything you no longer have at home!


### Notifications

Inventory is very receptive to feedback. Anytime an significant enough action is taken by the user, a toast notification appears. 

![Toast notifications... but no actual toast](https://user-images.githubusercontent.com/54646908/100668772-be70bf80-335c-11eb-833e-8f330294da45.png)
###### Toast notifications... but no actual toast :bread:

Sometimes Inventory goofs, or gaffs, or make a mistake, and it errors out. But no fear! ~~When~~Rather, **if** that should happen, a toast notification will pop up to let you know!

### Secure

Because the database is Firebase, the app is totally secure. Others can't access any of your information by accessing the app. The only people authorised to change your Inventory items, are the registered users that are the respective owners of their accounts. There's also no risk of anyone hacking into the database because of the proper use of environment variables in the code.

![Can't open the doors without all the keys](https://user-images.githubusercontent.com/54646908/100737006-e3ece000-33d3-11eb-8149-9f6f8a2bd71b.png)
###### Can't open the doors without all the keys :fire:


### Even securer

Besides the fact that the API keys are **not** exposed... well... anywhere, the website itself also has security measures in place to protect against malicious attacks. The Firebase rules are set up to where unauthorised users can't access any of the data on the database. And the only possible leak where unauthorised users can interact with the app, is protected with Google's Recaptcha service.

![So small it's almost invisible](https://user-images.githubusercontent.com/54646908/100737012-e6e7d080-33d3-11eb-948f-1047cd07ccb6.png)
###### So small it's almost invisible :mouse:

And yes, these API keys are also protected via environment variables.


### Conclusion

These are some of the more important features in Inventory. The app and its landing page are of course also fully responsive, SEOptimised, fast, Lighthouse certified, ...

and did we mention... **free**?


#### Join the silent revolution for digital grocery lists now! Sign up to Inventory today and enjoy all the benefits it has to offer!
