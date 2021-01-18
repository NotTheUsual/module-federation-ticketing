# Module Federation

Quick demo app to test out module federation

Rough structure is

- host
  - tickets
  - docs
  - user

but there's a bit more sharing than that.

`yarn` at the top level to install.

Easiest way to get everything running is to just run 
```
yarn start
```
at the top level.

Can also run each individual app by either changing into the directory and running `yarn start` there, or running e.g.
```
yarn workspaces @ticketing/user run start
```
from the top level.