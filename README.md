

    * `How to use`: 
    - yarn start
    - yarn test to run the unit test
    - yarn cypress:open to run automated test(you need to have the app run locally on port 3600)
    
    
    * `Application structure`: explain the architecture - feel free to change the base structure from this test
    
    - The App is made out of 4 components: Home, Categories, Products and SearchTerm, each one of them have snapshot tests as they don't do much in terms of functionality, I used redux, unit tested all the actions and the reducers also used Cypress to automate tests for all the user stories.
    
    * `A list of missing functional requirements`: if any, and explain why you didn't complete them
    
    - I didn't complete the last task because lack of time
    
    * `Possible improvements/ functionality`: anything that you wished you could've added if you had more time
    
    - More tests, UI could be improved a lot as well and maybe there are some more optimal solutions for some decisions I took.
    
    * Some notes:
    
    - I had issues with the cors, I recommend a much easier way to enable them instead of what you have in the docs, you could just use a chrome extension: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en, but anyway even with this I still had an issue because even though the error in the console disappeared I couldn't get any response: https://stackoverflow.com/questions/55153888/ajax-call-bug-with-chrome-new-version-73-0-3683-75, it appears to be something with the new chrome version, so you might want to be aware of this.
    

