document.addEventListener("DOMContentLoaded", () => {
    const rewardsAmountElement = document.getElementById("rewards-amount");
    let rewardsAmount = getRewardsAmount();

    rewardsAmountElement.textContent = rewardsAmount + " points";

    const vouchersSection = document.getElementById("vouchers-section");
    const vouchers = getAvailableVouchers(rewardsAmount);

    if (vouchers.length > 0) {
        const vouchersList = document.createElement("ul");
        vouchers.forEach((voucher) => {
            const voucherItem = document.createElement("li");
            voucherItem.textContent = voucher;
            vouchersList.appendChild(voucherItem);
        });
        vouchersSection.appendChild(vouchersList);
    }
});

function getRewardsAmount() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const lastRewardMonth = localStorage.getItem("lastRewardMonth");
    return parseInt(localStorage.getItem("rewards") || 0);
}

function getAvailableVouchers(rewardsAmount) {
    const availableVouchers = [];

    if (rewardsAmount >= 50) {
        availableVouchers.push("Amazon voucher: $15");
    }

    if (rewardsAmount >= 100) {
        availableVouchers.push("Google Store: $20");
    }

    if (rewardsAmount >= 1000) {
        availableVouchers.push("Spotify Membership(1 year): $10/m");
    }

    return availableVouchers;
}
