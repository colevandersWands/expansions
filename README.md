# Expansions

this file contains single-line expressions focusing on different operators.  copy the expansion you want to study into a new template and complete the steps

learning objectives
* all operators individually
* different types of expressions you'll come across (the different files of challenges)
* picking apart and understanding code
* abstraction, encapsulation & composition

### Index
* [casting & comparisons](#casting-comparison)
* [logical operators](#logical-operators)
* [arithmetic operators](#arithmetic-operators)
* [in-place operators](#in-place-operators)
* [all primitive operators](#all-primitive-operators)
* [comma operator](#comma-operator)
* [reference types](#reference-types)

---

## Casting & Comparisons

Limited to these operators:
* String, Boolean, void, Number
* ===, !==, <, >, <=, >=
* typeof

exercises:
```js
{ let a, b;
  Boolean(a) === Boolean(c) > Boolean(a) !== Boolean(c); }

{ let a, b, c;
 Number(Boolean(String(a))); }

// ...
```

[TOP](#expansions)

---

## Logical Operators

Limited to these operators:
* &&, ||, !
* Boolean

```js
{ let a, b;
  !(Boolean(a) || Boolean(b)); }

// ...
```

[TOP](#expansions)

---

## Arithmetic Operators

Limited to these operators:
* +, -, /, *, %, **, + (unary), - (unary)
* Number

```js
{ let a, b, c;
  (a + b) % -c; }

{ let a, b;
  (a + b) / (a % b); }

// ...
```

[TOP](#expansions)

---

## In-Place Operators

Limited to these operators:
* x++, ++x, x--, --x
* +=, -=, *=, /=, %=
* arithmetic operators

```js
{ let a;
  a++ / ++a; }

{ let a, b;
  b %= ++( a / Number(a) ); }

// ...
```

[TOP](#expansions)

---

## All Primitive Operators

Everything so far, plus:
* comma operator

```js
{ let a, b, c;
  a-- > !( Number(b) || String(c) ); }

// ...
```

[TOP](#expansions)

---

## Comma Operator

Everything so far, plus:
* comma operator
* =

```js
{ let a, b, c, d;
  a + b, a += b, c = d <= c, a++; }

// ...
```

[TOP](#expansions)

---

## Reference Types

Everything so far, plus:
* arrays & objects
* in, delete
* spread, destructuring


```js
{ let a, b, c, d;
  [a,b,c][Number(d)] >= {c,b,a}[d]; }

{ let a, b, c, d;
  [...{[a,b],[b,c],[c,d]}[d]]; }

{ let a, b, c, d;
  [...{[a,b],[b,c],[c,d]}[d]]; }

// ...
```
PS. Beware of errors!  Whenever you come across a test case that throws an error, comment it out.  not next to it which step threw an error and why.  

[TOP](#expansions)

---

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
