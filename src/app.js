fetch('/data/tarot-images.json')
  .then((res) => {
    return res;
  })
  .then((body) => {
    console.log(body);
    return body.json();
  })
  .then((body) => {
    const major = document.getElementById('major');
    const minor = document.getElementById('minor');

    Object.values(body.cards).forEach((card) => {
      let isMajor = card.arcana === 'Major Arcana';
      let text = isMajor ? card.Archetype : card.Affirmation;
      let fortunes = card.fortune_telling;

      const cardContainer = document.createElement('div');
      cardContainer.setAttribute('id', card.name);

      const fortuneContainer = document.createElement('div');
      const archetypeElement = document.createElement('b');

      const cardName = document.createElement('h3');
      cardName.insertAdjacentText('afterbegin', card.name);

      isMajor
        ? major.insertAdjacentElement('beforeend', cardContainer)
        : minor.insertAdjacentElement('beforeend', cardContainer);

      archetypeElement.insertAdjacentText('beforeend', text);

      fortunes.forEach((fortune) => {
        const fortuneElement = document.createElement('div');
        fortuneElement.append(fortune);
        fortuneContainer.append(fortuneElement);
      });

      cardContainer.append(cardName, archetypeElement, fortuneContainer);
    });  });
