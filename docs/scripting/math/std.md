---
sidebar_position: 100
---

# Standard library

By default, all [Lua's standard math utilities](https://www.lua.org/manual/5.3/manual.html#6.7) are supported. They are already loaded into the script; so, all you need to do is to call the functions inside the math table. Example:

```lua
math.sin(math.deg(90.0))
```