---
sidebar_position: 120
---

# Comparing entities

You can compare two entities by using Lua equality comparison operators:

```lua
local entity_query = game:get('EntityQuery')
local entity1 = entity_query:get_first_entity_by_name('EntityA')
local entity2 = entity_query:get_first_entity_by_name('EntityA')
local entity3 = entity_query:get_first_entity_by_name('EntityB')

-- true
local check1 = entity1 == entity2
-- false
local check2 = entity1 != entity2 

-- false
local check3 = entity1 == entity3
-- true
local check4 = entity1 != entity3
```
