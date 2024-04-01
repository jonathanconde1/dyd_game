# Nombre del Juego

Calabosos y dragones

# descricion

juego de rol multiplayer en construccion ...

# Patrones
  - (ECS) entidad componente y sistema.
  - Estatdos.

# Estructura (Planificando)

player -> avatar
user -< players
npc
inventory
maps
items

item - player = inventory;

kardex -> transaccion

muro de logros:

map - player = logros

monedas: cobre, plata, oro.

rules:
- por turno: true false?
- dados
- habilidades pasivas
- ataques
- items
