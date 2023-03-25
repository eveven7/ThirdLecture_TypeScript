import { of, tap, map, mergeMap } from "rxjs";
of(1, 2, 3)
  .pipe(
    tap((value) => console.log(value)),
    map((value) => value.toString()),
    mergeMap()
  )
  .subscribe({
    next: (value) => console.log(`Success ${value}`),
    error: (value) => `Error ${value}`,
  });
