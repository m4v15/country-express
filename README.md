# country-express

NOTES:

- currently a work in progress, have branches for solutions up to end of step 2.

## Steps for delivery

1. Walk through to set up express handlebars, up to the stage on branch `init`
2. Students should do challenge alone, link them to some guides (TBD).

### Challenges:  

Answers on step-x branch (not for 3 & 4)

1. On the ‘/populations’ route, pass in the country data, and use `each` to render an element for each country, saying the country name and it’s population, if the population is not null (if it is null, don’t display the country at all)

2. Do the same for capital cities at `/capitals` route

3. Split out partials which are the same

4. Change the population page to display in red text ‘X has a large population’ if it has a population > 1 mil and `X had a small population` in blue text otherwise (including null). You will need to use ‘helpers’ and `if`.

Additional challenges:

- Sort by pop size (not using HBS!)
- Add some nice CSS
