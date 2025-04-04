export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  /*
    Use backticks (`) instead of single quotes (') for template literals
    Remove the line continuation slashes (/) - template literals can span multiple lines naturally
    All variables should be wrapped in ${}
    The entire string should be contained within a single pair of backticks
    */

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
