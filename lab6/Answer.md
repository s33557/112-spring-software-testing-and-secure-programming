Name: 
ID: 511558025

### Fuzz Monitor
```
[+] All set and ready to roll!


                       american fuzzy lop 2.57b (bmpcomp)

┌─ process timing ─────────────────────────────────────┬─ overall results ─────┐
│        run time : 0 days, 0 hrs, 30 min, 29 sec      │  cycles done : 4      │
│   last new path : 0 days, 0 hrs, 8 min, 52 sec       │  total paths : 21     │
│ last uniq crash : 0 days, 0 hrs, 30 min, 23 sec      │ uniq crashes : 1      │
│  last uniq hang : 0 days, 0 hrs, 30 min, 0 sec       │   uniq hangs : 2      │
├─ cycle progress ────────────────────┬─ map coverage ─┴───────────────────────┤
│  now processing : 5* (23.81%)       │    map density : 0.06% / 0.07%         │
│ paths timed out : 0 (0.00%)         │ count coverage : 1.77 bits/tuple       │
├─ stage progress ────────────────────┼─ findings in depth ────────────────────┤
│  now trying : havoc                 │ favored paths : 2 (9.52%)              │
│ stage execs : 19/128 (14.84%)       │  new edges on : 2 (9.52%)              │
│ total execs : 51.0k                 │ total crashes : 1073 (1 unique)        │
│  exec speed : 15.55/sec (zzzz...)   │  total tmouts : 13.2k (6 unique)       │
├─ fuzzing strategy yields ───────────┴───────────────┬─ path geometry ────────┤
│   bit flips : 4/2688, 2/2676, 1/2652                │    levels : 4          │
│  byte flips : 0/336, 0/324, 0/300                   │   pending : 9          │
│ arithmetics : 11/18.8k, 0/5345, 0/1632              │  pend fav : 0          │
│  known ints : 1/204, 2/824, 0/1418                  │ own finds : 20         │
│  dictionary : 0/0, 0/0, 0/0                         │  imported : n/a        │
│       havoc : 0/2560, 0/752                         │ stability : 100.00%    │
│        trim : 99.97%/103, 0.00%                     ├────────────────────────┘
^C────────────────────────────────────────────────────┘          [cpu000:167%]

+++ Testing aborted by user +++
[+] We're done here. Have a nice day!

```

### Run Crash Result
```

```
