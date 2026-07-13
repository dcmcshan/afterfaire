const header = document.querySelector('[data-header]');
const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const calculator = document.querySelector('[data-calculator]');
if (calculator) {
  const input = calculator.querySelector('#attendance');
  const output = calculator.querySelector('#attendance-output');
  const revenueEl = calculator.querySelector('[data-revenue]');
  const profitEl = calculator.querySelector('[data-profit]');
  const marginEl = calculator.querySelector('[data-margin]');
  const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  const update = () => {
    const guests = Number(input.value);
    const nights = 8;
    const revenuePerGuest = 214;
    const variablePerGuest = 40.36;
    const fixed = 3000 + (650 * nights);
    const revenue = guests * nights * revenuePerGuest;
    const profit = revenue - (guests * nights * variablePerGuest) - fixed;
    const margin = revenue === 0 ? 0 : profit / revenue;

    output.value = guests;
    output.textContent = guests;
    revenueEl.textContent = money.format(revenue);
    profitEl.textContent = money.format(profit);
    profitEl.classList.toggle('negative', profit < 0);
    marginEl.textContent = `${Math.round(margin * 100)}%`;
  };

  input.addEventListener('input', update);
  update();
}

const signup = document.querySelector('[data-signup]');
if (signup) {
  signup.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.querySelector('[data-form-message]');
    message.textContent = 'Interest noted in this browser demo. Connect an approved email service before launch.';
    signup.reset();
  });
}
