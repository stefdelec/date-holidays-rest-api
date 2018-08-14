# date-holidays-rest-api

A node server rest web service to get holidays of different countries.
# What is it? 
`date-holidays-rest-api` is a basic node server that implements this [great
library
https://github.com/commenthol/date-holidays](https://github.com/commenthol/date-holidays).

See a [running example here : https://date-holidays.herokuapp.com/countries](https://date-holidays.herokuapp.com/countries)

# Getting started :
1. Clone repo
2. `npm i`
3. `npm start`
4. `localhost:8081/countries` . You should get all countries supported


# Doc
Replace `https://date-holidays.herokuapp.com/` with `localhost` if running local.
<br> It is the same example as date-holidays'example.

1. get supported countries :
[/countries](https://date-holidays.herokuapp.com/countries)

2. get supported states e.g. for US 
[/countries/us/states](https://date-holidays.herokuapp.com/countries/us/states)

3. get supported regions e.g. for US, Lousiana
[/countries/us/states/la/regions](https://date-holidays.herokuapp.com/countries/us/states/la/regions)
4. Get holidays : <br>
you can have all different levels :
<br> [/countries/us/holidays/2017](https://date-holidays.herokuapp.com/countries/us/holidays/2017)
<br> [/countries/us/states/la/holidays/2018](https://date-holidays.herokuapp.com/countries/us/states/la/holidays/2018)
<br> [/countries/us/states/la/regions/no/holidays/2020](https://date-holidays.herokuapp.com/countries/us/states/la/regions/no/holidays/2020)









# todo
- validate a date
