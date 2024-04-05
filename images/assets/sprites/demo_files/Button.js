//class Button = {
//     constructor(x, y, label, game, callback) {
//         const button = game.add.text(x, y, label)
//             .setOrigin(0.5)
//             .setPadding(10)
//             .setStyle({ backgroundColor: '#111' })
//             .setInteractive({ useHandCursor: true })
//             .on('pointerdown', () => callback(game))
//             .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))
//             .on('pointerout', () => button.setStyle({ fill: '#FFF' }));
//     }
// }

function Button (e,x, y, label, game, callback) {
  console.log("funct button",e);
    const button = e.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback(e))
            .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => button.setStyle({ fill: '#FFF' }));

}
