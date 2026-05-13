---
title: SQL joins demystified: a visual guide
date: 2025-03-12
excerpt: Inner, left, right, full outer — I finally stopped confusing them after I drew this one diagram.
---

If you've ever stared at a `LEFT JOIN` and wondered why half your rows are disappearing, this post is for you.

I spent an embarrassing amount of time confusing SQL joins. Not because I didn't understand the concept — I did, sort of — but because the words kept sliding off my brain. *Left* of what? Left means keep the left table? Which one is left?

Here's how I finally locked it in.

## Think in terms of which rows survive

Instead of thinking about directions, think about a simple question: **whose rows survive, even if there's no match?**

### INNER JOIN

Only rows that match in **both** tables survive. If a row in table A has no counterpart in table B, it's gone.

```sql
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

Use this when: you only care about records that exist on both sides.

### LEFT JOIN

Every row from the **left** table survives. If there's no match in the right table, you get `NULL` for those columns.

```sql
SELECT users.name, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

Use this when: you want all your users, whether or not they've placed an order.

### RIGHT JOIN

The mirror of LEFT JOIN. Every row from the **right** table survives. Rarely used in practice — most people just swap the table order and use LEFT JOIN.

### FULL OUTER JOIN

**Everyone** survives. Rows with no match get `NULL` on the missing side.

```sql
SELECT users.name, orders.total
FROM users
FULL OUTER JOIN orders ON users.id = orders.user_id;
```

Use this when: you want a complete picture, including unmatched rows from both sides.

## The mental model that works for me

> The "left" or "right" refers to which table's rows are **guaranteed to appear** in the output.

INNER JOIN = neither is guaranteed (only matches survive)  
LEFT JOIN = left table is guaranteed  
RIGHT JOIN = right table is guaranteed  
FULL OUTER = both are guaranteed  

That's it. Once that clicked, I stopped second-guessing myself.
