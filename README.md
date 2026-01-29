# Sprint 2 - Vikings | Programació Orientada a Objectes

Aquest projecte conté exercicis pràctics per aprendre els conceptes de programació orientada a objectes (POO) i herència amb TypeScript. Implementaràs classes de soldats vikings i saxons que lluitaran en una batalla épica.

## Requisits

- Node.js (v20 o superior)
- npm

## Instal·lació

1. Clona el repositori:

```bash
git clone <url-del-repositori>
cd vikings
```
2. » Desconnecta el teu repositori del repositori de IT Academy. Utilitza la següent ordre de git:
```bash
git remote rm origin
```

3. Instal·la les dependències:

```bash
npm install
```

## Executar els Tests

Per executar tots els tests:

```bash
npm test
```

### Consell

Abans de fer commit, pots executar manualment les comandes per assegurar-te que tot està correcte:

```bash
npm test
```

## Com treballar amb els exercicis

**Important**: Descomenta els tests **d'un en un** per resoldre'ls progressivament.

### Execució dels tests

1. Després de la instal·lació, executa `npm test` i veuràs errors del tipus:

```sh
 FAIL  tests/Soldier.test.ts [ tests/Soldier.test.ts ]
 Error: No test found in suite tests/Soldier.test.ts
 ....
```

2. Obre el fitxer [tests/Soldier.test.ts](tests/Soldier.test.ts) i descomenta la funció `test()` de la **línia 14**:

```ts
  describe("constructor method", function () {

     // test('should receive 2 arguments: health and strength ', ()=> expect(Soldier.length).toEqual(2));
  ...
  });
```

3. Ara el test (_should receive 2 arguments (health & strength)_) estarà fallant!

### Escriu el codi

Ara has d'escriure el codi correcte al fitxer [src/Soldier.ts](src/Soldier.ts) per passar el test. El codi que trobaràs és el següent:

```typescript
// Soldier
export class Soldier {}
```

En aquest cas, el test diu que _Soldier constructor function should receive 2 arguments (health & strength)_, així que has d'escriure el codi correcte que passi el test. Implementa la funció constructora de la classe `Soldier` que rebi dos paràmetres:

```typescript
// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {}
}
```

### Continua amb els següents tests

Un cop hagis passat el primer test, descomenta el següent i continua codificant per passar els tests.

Continua fent el mateix amb els fitxers de test dels arxius: [Viking.ts](src/Viking.ts), [Saxon.ts](src/Saxon.ts) i [War.ts](src/War.ts).

## Exercicis

![](https://i.imgur.com/5TPElt8.jpg)

--------------------------------------------------------------------------------

### Soldier

### Soldier

Modifica la classe `Soldier` i afegeix dos mètodes: `attack()` i `receiveDamage()`.

#### Mètode `constructor()`
- ha de rebre **2 arguments** (health i strength)
- ha de rebre la **propietat `health`** com a **1r argument**
- ha de rebre la **propietat `strength`** com a **2n argument**

#### Mètode `attack()`
- ha de ser una funció
- ha de rebre **0 arguments**
- ha de retornar **la propietat `strength` del `Soldier`**

#### Mètode `receiveDamage()`

- ha de ser una funció
- ha de rebre **1 argument** (-*damage*-)
- ha de restar el dany rebut de la propietat `health`
- **no ha de retornar** res


--------------------------------------------------------------------------------


### Viking

Un `Viking` és un `Soldier` amb una propietat addicional: el seu nom (`name`). A més, té implementat el mètode `receiveDamage()` de manera diferent i té un nou mètode: `battleCry()`.

Modifica el constructor de la classe `Viking` perquè hereti de la classe `Soldier`, reimplementa el mètode `receiveDamage()` dins del `Viking`, i afegeix el nou mètode `battleCry()`.

#### Herència
- `Viking` ha d'estendre de la classe `Soldier`

#### Mètode `constructor()`
- ha de rebre **3 arguments** (name, health i strength)
- ha de rebre la **propietat `name`** com a **1r argument**
- ha de rebre la **propietat `health`** com a **2n argument**
- ha de rebre la **propietat `strength`** com a **3r argument**

#### Mètode `attack()`

(S'**hereta** de `Soldier`, no necessita reimplementació.)
- ha de ser una funció
- ha de rebre **0 arguments**
- ha de retornar **la propietat `strength` del `Viking`**

#### Mètode `receiveDamage()`

(Aquest mètode necessita ser **reimplementat** per `Viking` perquè la versió `Viking` retorna valors diferents.)

- ha de ser una funció
- ha de rebre **1 argument** (-*damage*-)
- ha de restar el dany rebut de la propietat `health`
- **si el `Viking` encara està viu**, hauria de retornar **"NAME has received DAMAGE points of damage"**
- **si el `Viking` mor**, ha de retornar **"NAME has died in act of combat"**

#### Mètode `battleCry()`

[Pots informar-te sobre crits de guerra, aquí](http://www.artofmanliness.com/2015/06/08/battle-cries/).

- ha de ser una funció
- ha de rebre **0 arguments**
- ha de retornar **"Odin Owns You All!"**


--------------------------------------------------------------------------------


### Saxon

Un `Saxon` és una versió més feble d'un `Soldier`. Al contrari d'un `Viking`, el `Saxon` no té nom. El seu mètode `receiveDamage()` també és diferent de la versió de `Soldier`.

Modifica el constructor de `Saxon`, fes que estengui de `Soldier` i reimplementa el mètode `receiveDamage()`.

#### Herència
- `Saxon` ha d'estendre de `Soldier`

#### Mètode `constructor()`
- ha de rebre **2 arguments** (health i strength)
- ha de rebre la **propietat `health`** com a **1r argument**
- ha de rebre la **propietat `strength`** com a **2n argument**

#### Mètode `attack()`
(Aquest mètode s'**hereta** de `Soldier`, no és necessari reimplementar-lo)

- ha de ser una funció
- ha de rebre **0 arguments**
- ha de retornar **la propietat `strength` del `Soldier`**

#### Mètode `receiveDamage()`

(Aquest mètode necessita ser **reimplementat** perquè la versió `Saxon` necessita retornar valors diferents.)

- ha de ser una funció
- ha de rebre **1 argument** (-*damage*-)
- ha de restar el dany rebut de la propietat `health`
- **si el Saxon encara està viu**, ha de retornar _**"A Saxon has received DAMAGE points of damage"**_
- **si el Saxon mor**, ha de retornar _**"A Saxon has died in combat"**_

--------------------------------------------------------------------------------


### (BONUS) War

Ara anem al merder: la GUERRA. La classe `War` ha de servir per muntar una batalla entre l'exèrcit de `Viking` i l'exèrcit de `Saxon`.

Modifica la classe `War` i afegeix aquests 5 mètodes:
- `addViking()`
- `addSaxon()`
- `vikingAttack()`
- `saxonAttack()`
- `showStatus()`

#### Mètode `constructor()`

Quan es creï `War`, els exèrcits (*armies*) han d'estar buits. Els soldats s'afegiran als exèrcits posteriorment.

- ha de rebre **0 arguments**
- ha d'assignar un array buit a la **propietat `vikingArmy`**
- ha d'assignar un array buit a la **propietat `saxonArmy`**

#### Mètode `addViking()`

Afegeix 1 `Viking` al `vikingArmy`. Si vols un exèrcit de 10 `Viking`, necessitaràs cridar el mètode 10 vegades.

- ha de ser una funció
- ha de rebre **1 argument** (un objecte `Viking`)
- ha d'afegir el `Viking` rebut a l'exèrcit
- **no retorna res**

#### Mètode `addSaxon()`

És la versió `Saxon` d'`addViking()`.

- ha de ser una funció
- ha de rebre **1 argument** (un objecte `Saxon`)
- ha d'afegir el `Saxon` rebut a l'exèrcit
- **no retorna res**

#### Mètode `vikingAttack()`

S'invoca el mètode `receiveDamage()` del `Saxon` (escollit a l'atzar) amb un dany igual a la `strength` d'un `Viking` (també escollit a l'atzar). Només ha de realitzar un atac i el `Saxon` no ha de contratacar.

- ha de ser una funció
- ha de rebre **0 arguments**
- ha de fer que `receiveDamage()` de `Saxon` sigui igual a `strength` d'un `Viking`
- ha d'eliminar els saxons morts de l'exèrcit
- ha de retornar el **resultat de cridar `receiveDamage()` de `Saxon`** amb `strength` de `Viking`

#### Mètode `saxonAttack()`

La versió `Saxon` de `vikingAttack()`. Un `Viking` rep dany igual a `strength` d'un `Saxon`.

- ha de ser una funció
- ha de rebre **0 arguments**
- ha de fer que `receiveDamage()` de `Viking` sigui igual a `strength` d'un `Saxon`
- ha d'eliminar els vikings morts de l'exèrcit
- ha de retornar el **resultat de cridar `receiveDamage()` de `Viking`** amb `strength` de `Saxon`

#### Mètode `showStatus()`

Retorna l'estat actual de la guerra (`War`) basat en la mida dels exèrcits.

- ha de ser una funció
- ha de rebre **0 arguments**
- **Si l'array de `Saxon` està buit**, retornarà _**"Vikings have won the war of the century!"**_
- **Si l'array de `Viking` està buit**, retornarà _**"Saxons have fought for their lives and survive another day..."**_
- **Si hi ha almenys 1 `Viking` i 1 `Saxon`**, retornarà _**"Vikings and Saxons are still in the thick of battle."**_


--------------------------------------------------------------------------------

## Recursos

- [Documentació oficial de TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Classes i Herència](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Object Oriented Programming](https://www.typescriptlang.org/docs/handbook/2/classes.html)

## Llicència

GPL-3.0

--------------------------------------------------------------------------------

💪
![Vikings picture](https://i.imgur.com/fHHEoEj.jpg)

