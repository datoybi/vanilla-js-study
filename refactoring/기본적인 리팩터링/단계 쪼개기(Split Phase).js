/*
    단계 쪼개기
    컴파일 하는 과정에 따라 여러단계가 순차적으로 연결된 형태로 분리하면 좋다.
*/

// 전
const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split("-")[1]];
const orderPrice = parseInt(orderData[1]) * productPrice;

// 후
const orderRecord = parseOrder(order);
orderPrice = price(orderRecord, priceList);

function parseOrder(aString){
    const values = aString.split(/\s+/);
    return ({
        productID: values[0].split("-")[1],
        quantity: parseInt(value[1]),
    });
}

function price(order, priceList){
    return order.quantity * priceList[order.productID];
}

// 예시 - 상품의 결제 금액을 계산하는 코드 
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity; // 상품 계산
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase; // 배송비 계산
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}

// step 1. 배송비 계산 부분을 함수로 추출
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const price = applyShipping(basePrice, shippingMethod, quantity, discount);
    return price;
}

function applyShipping (basePrice, shippingMethod, quantity, discount) {
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase; // 배송비 계산
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}

// step2. 첫번째 단계와 두번째 단계가 주고받을 중간 데이터 구조를 만든다.
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = {}; // 중간 데이터 구조
    const price = applyShipping(priceData, basePrice, shippingMethod, quantity, discount);
    return price;
}

function applyShipping (priceData, basePrice, shippingMethod, quantity, discount) {
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase; // 배송비 계산
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}

// step3. applyShipping 매개변수 다듬기 두번째 단계에만 있는것은 그대로 두고 나머지는 json에 담는다.
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = {basePrice: basePrice, quantity: quantity, discount: discount}; // 중간 데이터 구조
    const price = applyShipping(priceData, shippingMethod);
    return price;
}

function applyShipping (priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase; // 배송비 계산
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
}

// step4. 첫번째 단계 코드를 함수로 추출하고 이 데이터 구조를 반환하게 한다.
function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    return applyShipping(priceData, shippingMethod);
}

function calculatePricingData (product, quantity){
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    return {basePrice: basePrice, 
        quantity: quantity, 
        discount: discount}; 
}

function applyShipping (priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase; // 배송비 계산
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount + shippingCost;
}
