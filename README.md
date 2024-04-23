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


## api keyboard
# para crear key
284  ssh-keygen -t ed25519 -C "jonathanconde1@gmail.com"
285  eval "$(ssh-agent -s)"
286  ls -al ~/.ssh

# copiar key
288  cd ~/.shh
290  cat ~/.ssh/id_github.pub

#iniciar agent ssh
291  eval "$(ssh-agent -s)"
#agregar key al agente
292  ssh-add ~/.ssh/id_github

# find
2424
