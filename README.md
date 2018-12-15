# country-express

NOTES:

- currently a work in progress, have branches for solutions up to end of step 2.
- Aims are to teach:
  - how to set up express-handlebars (via walkthrough)
  - learn HBS syntax (via challenges)

## Steps for delivery

1. Walk through to set up express handlebars, up to the stage on branch `init`
2. Students should do challenge alone, link them to some guides (TBD).

### Challenges:  

Answers on step-x branch (not for 3 & 4)

1. On the ‘/populations’ route, pass in the country data, and use `each` to render an element for each country, saying the country name and it’s population, if the population is not null (if it is null, don’t display the country at all)

_This will teach using different views and if/each statements_

2. Do the same for capital cities at `/capitals` route

_Generate another view in order to be able to see the benefits of partials in challenge 3_

3. Split out partials which are the same

_teach how partials work, how to set them up in express-handlebars_

4. Change the population page to display in red text ‘X has a large population’ if it has a population > 1 mil and `X had a small population` in blue text otherwise (including null). You will need to use ‘helpers’ and `if`.

_teach how helpers work_

Additional challenges:

- Sort by pop size (not using HBS!)
- Add some nice CSS
