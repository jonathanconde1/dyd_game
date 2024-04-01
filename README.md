# Nombre del Juego

Calabosos y dragones

# vista
- Al ingresar al juego le pregunta si desea cargar un perfil o desea iniciar desde cero.

- si desea iniciar de cero debe elegir y llenar campos requeridos. Tambien puede seleccionar perfiles predefinidos. Se le mostrara 5 perfiles opcionales de inicio rapido.

- al iniciar desde cero se le creara un perfil de usuario con posibilidad a crear mas avatares con los que jugar.

- La partida consta de estados, debe ser lo mas parecido a D&D.

# descripcion

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
