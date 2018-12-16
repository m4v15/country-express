# country-express

NOTES:

- currently a work in progress, have branches for solutions up to end of step 2.
- Aims are to teach:
  - how to set up express-handlebars (via walkthrough)
  - learn HBS syntax (via challenges)

## Steps for delivery

1. Walk through to set up express handlebars, up to the stage on branch `after-walkthrough`
2. Students should do challenge alone, link them to some guides (TBD).

### Challenges:  

Answers on `after-challenge-x` branch (not for 3 & 4)

1. On the ‘/populations’ route, pass in the country data, and use `each` to render an element for each country, saying the country name and it’s population, if the population is not null (if it is null, don’t display the country at all)

_This will teach using different views and if/each statements_

2. Do the same for capital cities at `/capitals` route

_Generate another view in order to be able to see the benefits of partials in challenge 3_

3. Split out partials which are the same

_teach how partials work, how to set them up in express-handlebars_

4. Your challenge now is to make a new route, view, and link on the home view, with the following criteria:
  - When a user clicks the links it takes them to a view with a list of the countries.
  - If the country has a population larger than 1 million, it should display, in red text, ‘X has a large population’
  - Else, it should display, in blue text, `X has a small population`
  - All the other views/routes should stay the same (i.e. you will need to use a new view)
  - You will need to make a helper to check, and use an if statement in HBS.

_teach how helpers work_

5. Now let's use all these templates some more! You should add buttons that take you to new endpoints that render the following, **without adding anymore handlebars templates! Instead you should just be passing in different, manipulated data to the templates we already have.** If you want to, you can style the links a bit (make the link a partial!):
  - [ ] `big`: the same as `populations` but only render countries with population larger than 1 million.
  - [ ] `small`: the same as `populations` but only render countries with population smaller than 1 million.
  - [ ] `sorted`: the same as `populations` but render the countries in order of population largest to smallest.
  
 _show how by using templates you can quickly make lots of different pages!_


Additional challenges:

- Sort by pop size (not using HBS!)
- Add some nice CSS
