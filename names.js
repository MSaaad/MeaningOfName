document.querySelector('.inputname').addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter

    var inputname = document.getElementById('inputname').value;
    var significa = document.getElementById('name');

    var i = inputname.toLowerCase();
    significa.textContent = getName(i);

    significa.style.visibility = 'visible';
  }
});
var res = str.toLowerCase();

function getName(inputname) {

  var answer = "";

  switch (inputname) {
    case 'saad':
      answer = 'Happiness, Prosperity, Success, Good Luck. ';
      break;
    case 'areej':
      answer = 'Mamma papa se poocho apny :")';

      // answer = 'Pleasant Smell, Fragrance';
      break;
    case 'babar':
      answer = 'Lion, king of jungle';
      break;
    case 'wajahat':
      answer = 'Esteemed personality';
      break;
    case 'abdullah':
      answer = 'Servant of Almighty Allah';
      break;
    case 'aimen':
      answer = 'righteous, blessed, lucky ';
      break;
    case 'ali':
      answer = 'High, elevated, champion';
      break;
    case 'asher':
      answer = 'Fortunate, lucky, happy';
      break;
    case 'faizan':
      answer = 'Successful, beneficence, ruler';
      break;
    case 'faraz':
      answer = 'Ascent, height, exalted';
      break;
    case 'hamza':
      answer = 'strong, steadfast';
      break;
    case 'imran':
      answer = 'prosperity, happiness"';
      break;
    case 'iraj':
      answer = 'Flower, fragrance, soft';
      break;
    case 'javeria':
      answer = 'Sharing happiness';
      break;
    case 'jiya':
      answer = 'Sharing happiness';
      break;
    case 'juveria':
      answer = 'Sharing happiness';
      break;
    case 'madiha':
      answer = 'Worthy of praise';
      break;
    case 'maha':
      answer = 'Greatness, moon, wild cow';
      break;
    case 'mahnoor':
      answer = 'Moon light';
      break;
    case 'maliha':
      answer = 'Happy glowing face, well-spoken';
      break;
    case 'neha':
      answer = 'Beauty, affection';
      break;
    case 'osama':
      answer = 'Lion, well-wisher';
      break;
    case 'rahima':
      answer = 'Kind, compassionate';
      break;
    case 'saif':
      answer = 'Sword';
      break;
    case 'samia':
      answer = 'High minded, sublime, eminent';
      break;
    case 'taliya':
      answer = 'Morning Dew';
      break;
    case 'ukasha':
      answer = 'Protector';
      break;
    case 'umer':
      answer = 'Life';
      break;
    case 'zobia':
      answer = 'God bless, Hope';
      break;
    case 'zubair':
      answer = 'Strong, brave';
      break;
    case 'rooma':
      answer = 'Truthful, honest, beautiful';
      break;
    case 'hina':
      answer = 'Fragrance';
      break;
    case 'haris':
      answer = 'Farmer, Grace';
      break;
    case 'Taqi':
      answer = 'Righteous, Pure';
      break;
    case 'umair':
      answer = 'Intelligent';
      break;
    case 'kashif':
      answer = 'Pioneer, Revealer';
      break;
    case 'maria':
      answer = 'Bitter or sea of biterness';
      break;
    case 'anas':
      answer = 'Affection, love';
      break;
    case 'talha':
      answer = 'Kind of tree';
      break;
    case 'wajiha':
      answer = 'Beautiful woman, Glorious';
      break;
    case 'basit':
      answer = 'Servant of the Extender, Creator';
      break;
    case 'atia':
      answer = 'Gift';
      break;
    case 'samara':
      answer = 'Soft, pleasant,light';
      break;
    case 'farhat':
      answer = 'Happiness, joy';
      break;
    case 'nimra':
      answer = 'Pure';
      break;
    case 'maryam':
      answer = 'Pure, Fresh';
      break;
    case 'zehra':
      answer = 'Beautiful, Bright, Shining';
      break;
    case 'shamima':
      answer = 'Scent, Flavor';
      break;
    case 'shamim':
      answer = 'Sweet, Smelling-breeze';
      break;
    case 'urooj':
      answer = 'Rising, Mounting';
      break;
    case 'shahid':
      answer = 'Present, judge, just';
      break;
    case 'anum':
      answer = 'Blessing of Allah';
      break;
    case 'safeer':
      answer = 'Mediator, Ambassador';
      break;
    case 'shahzaib':
      answer = 'Bold, Independent, Security';
      break;
    case 'ahsan':
      answer = 'Best, The best of all';
      break;
    case 'ayesha':
      answer = 'She who lives';
      break;
    case 'minaal':
      answer = 'Precious gem, Gift';
      break;
    case 'anaya':
      answer = 'Care, Protection, Diligence';
      break;
    case 'humayun':
      answer = 'Blessed, Auspicious';
      break;
    case 'ahmed':
      answer = 'Much praised';
      break;
    case 'zaid':
      answer = 'To prosper';
      break;
    case 'hania':
      answer = 'To be happy';
      break;
    case 'wania':
      answer = 'Allah"s Gift';
      break;
    case 'samina':
      answer = 'Precious, Useful';
      break;
    case 'sarfaraz':
      answer = 'Respected, blessed';
      break;
    case 'rohaan':
      answer = 'To ascend';
      break;
    case 'subhaan':
      answer = 'Aware, Glorifying';
      break;
    case 'aliyan':
      answer = 'Ascending';
      break;
    case 'alisha':
      answer = 'Nobility';
      break;
    case 'areeba':
      answer = 'Wise';
      break;
    case 'amna':
      answer = 'Peace';
      break;
    case 'malaika':
      answer = 'Angel';
      break;
    case 'komal':
      answer = 'Soft, Soft heart';
      break;
    case 'nida':
      answer = 'Voice, call';
      break;
    case 'afreen':
      answer = 'Elegant, enchanting';
      break;
    case 'zareen':
      answer = 'Full of expression, smile';
      break;
    case 'armaan':
      answer = 'Wish, longing';
      break;
    case 'fariya':
      answer = 'Strange, Unheard of';
      break;
    case 'wasim':
      answer = 'Graceful, handsome, gentle';
      break;
    case 'fahad':
      answer = 'Panther, leopard';
      break;
    case 'hareem':
      answer = 'Walls of House of Kaaba';
      break;
    case 'sabiha':
      answer = 'Reciprocal of beautiful';
      break;

    default:
      answer = 'Umm, apologies, Apka naam zehan mai nhi aya :) ';
      break;
  }

  return answer;
}