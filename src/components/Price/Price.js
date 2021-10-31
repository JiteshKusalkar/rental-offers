function Price({ locale = 'en-EU', currency, amount = 0 }) {
  const value = new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);

  return <>{value}</>;
}

export default Price;
