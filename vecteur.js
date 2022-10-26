function dotProduct(vect_A, vect_B)
{
    let product = 0;
    for (let i = 0; i < n; i++)
        product = product + vect_A[i] * vect_B[i];
    return product;
}