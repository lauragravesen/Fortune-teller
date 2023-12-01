const firstSentence = () => {
    const rand = Math.floor(Math.random() * 5);
  
    switch (rand) {
      case 0:
      return "You will receive a ";
      case 1:
      return "You won't get the ";
      case 2:
      return "Beware of ";
      case 3:
      return "Don't trust the ";
      case 4:
      return "I foresee a ";
    }
  };

  const secondSentence = () => {
    const rand = Math.floor(Math.random() * 5);
  
    switch (rand) {
      case 0:
      return "grand fortune ";
      case 1:
      return "horrible coffee ";
      case 2:
      return "unexpected visit ";
      case 3:
      return "white dog ";
      case 4:
      return "phone call ";
    }
  };

  const thirdSentence = () => {
    const rand = Math.floor(Math.random() * 5);
  
    switch (rand) {
      case 0:
      return "within a week.";
      case 1:
      return "before the end of the day.";
      case 2:
      return "in an unforeseeable future.";
      case 3:
      return "..oh no the crystal ball is unclear. I need more assets for a precise answer.";
      case 4:
      return "from a new lover.";
    }
  };

  const fortuneTeller = () => {
    return firstSentence() + secondSentence() + thirdSentence();
  };


  console.log(fortuneTeller());
