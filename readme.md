# Today's date with leading zeros

A simple script that adds a leading '0' to any day/month less than '10'.

For example, 2nd May 2017 would simply be '2/5/2017', so this makes it '02/05/2017'.

Uses? For lining up columns of dates nicely. Or simply adding zeros to date integers.

## TODO:

- Rewrite to accept any date passed in as a parameter
- As well as EU/UK-style dates, enable US-style mm/dd/yyyy
- Use unambiguous 3-letter months (mmm) for more readable dates of matching length
- Make 3-letter month options: dd/mmm/yyyy, mmm/dd/yyyy, yyyy/mmm/dd/, yyyy/dd//mmm
