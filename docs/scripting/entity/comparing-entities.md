---
sidebar_position: 120
---

# Comparing entities

You can compare two entities by using Lua equality comparison operators:

```lua
local entityQuery = game:get('EntityQuery')
local entity1 = entityQuery:getFirstEntityByName('EntityA')
local entity2 = entityQuery:getFirstEntityByName('EntityA')
local entity3 = entityQuery:getFirstEntityByName('EntityB')

-- true
local check1 = entity1 == entity2
-- false
local check2 = entity1 != entity2 

-- false
local check3 = entity1 == entity3
-- true
local check4 = entity1 != entity3
```
