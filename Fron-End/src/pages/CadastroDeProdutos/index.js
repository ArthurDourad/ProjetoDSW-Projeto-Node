import "./index.scss";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Cabecalho2 from "../../components/Cabecalho2";

import '../../css/global.css';
import Rodape from "../../components/Rodape";

export default function CadastroDeProdutos() {
    const [images, setImages] = useState([]);
    const [variacoes, setVariacoes] = useState([{
        tamanho: '',
        cor: '',
        quantidade: ''
    }]);

    function addImage(event) {
        const selectedFiles = event.target.files;
        const newImages = [];

        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            newImages.push(URL.createObjectURL(file));
        }
        setImages([...images, ...newImages]);
    }

    function deleteImage(index) {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    }

    function addVariacao() {
        setVariacoes([...variacoes, { tamanho: '', cor: '', quantidade: '' }]);
    }

    function handleVariacaoChange(index, event) {
        const { name, value } = event.target;
        const newVariacoes = [...variacoes];
        newVariacoes[index] = { ...newVariacoes[index], [name]: value };
        setVariacoes(newVariacoes);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function deleteVariacao(index) {
        const updatedVariacoes = [...variacoes];
        updatedVariacoes.splice(index, 1);
        setVariacoes(updatedVariacoes);
    }

    return (
        <section className="CadastroProdutoEstilo">

            <Cabecalho2 />

            <main>
                <div class="mainConteudo">
                    <div class="voltar">
                        <Link to="/produtos">
                            <h1><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3794 31.5L15.9375 24L23.3794 16.5M16.9716 24H32.0625" stroke="black"
                                    stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M42 24C42 14.0625 33.9375 6 24 6C14.0625 6 6 14.0625 6 24C6 33.9375 14.0625 42 24 42C33.9375 42 42 33.9375 42 24Z"
                                    stroke="black" stroke-width="4" stroke-miterlimit="10" />
                            </svg>
                                Voltar</h1>
                        </Link>
                    </div>
                    <h1 id="titulo">• Cadastrar produto:</h1>

                    <div class="formulario">
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="flag" value="cad_prod"></input>

                            <label for="nomeProd">Nome do produto:*</label>
                            <input id="nomeProd" type="text" name="nomeProd"></input>

                            <label for="categoria">Categoria:*</label>
                            <input id="categoria" type="text" name="categoria"></input>

                            <label for="marca">Marca:*</label>
                            <input id="marca" type="text" name="marca"></input>

                            <label for="preco">Preço:*</label>
                            <input id="preco" type="number" name="preco"></input>

                            <label for="descricao">Descrição:*</label>
                            <input id="descricao" type="text" name="descricao"></input>

                            <label for="sku">SKU:*</label>
                            <input id="sku" type="text" name="sku"></input>

                            <label for="locEstoque">Locação de estoque:</label>
                            <input id="locEstoque" type="text" name="locEstoque"></input>

                            <label for="peso">Peso:*</label>
                            <input id="peso" type="number" name="peso"></input>

                            <label for="imagem">• Imagem:*</label>
                            <div className="imagemProd">
                                <input type="file" id="imageInput" accept="image/*" multiple onChange={addImage} />
                                <div id="imageContainer">
                                    {images.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image} alt={`Imagem ${index}`} />
                                            <button onClick={() => deleteImage(index)}><svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15 6.66667V5C15 4.55797 15.1756 4.13405 15.4882 3.82149C15.8007 3.50893 16.2246 3.33333 16.6667 3.33333H23.3333C23.7754 3.33333 24.1993 3.50893 24.5118 3.82149C24.8244 4.13405 25 4.55797 25 5V6.66667H31.6667C32.5507 6.66667 33.3986 7.01785 34.0237 7.64298C34.6488 8.2681 35 9.11594 35 10V11.6667C35 12.5507 34.6488 13.3986 34.0237 14.0237C33.3986 14.6488 32.5507 15 31.6667 15H31.445L30.3117 32C30.2271 33.2655 29.6648 34.4515 28.7386 35.318C27.8125 36.1844 26.5916 36.6665 25.3233 36.6667H14.71C13.4428 36.6666 12.2229 36.1855 11.2968 35.3204C10.3708 34.4553 9.80784 33.2709 9.72167 32.0067L8.56167 15H8.33333C7.44928 15 6.60143 14.6488 5.97631 14.0237C5.35119 13.3986 5 12.5507 5 11.6667V10C5 9.11594 5.35119 8.2681 5.97631 7.64298C6.60143 7.01785 7.44928 6.66667 8.33333 6.66667H15ZM31.6667 10H8.33333V11.6667H31.6667V10ZM11.9017 15L13.0467 31.78C13.0754 32.2015 13.2631 32.5964 13.5719 32.8848C13.8807 33.1731 14.2875 33.3335 14.71 33.3333H25.3233C25.7464 33.3334 26.1536 33.1726 26.4625 32.8835C26.7714 32.5945 26.9587 32.1988 26.9867 31.7767L28.1033 15H11.9033H11.9017ZM16.6667 16.6667C17.1087 16.6667 17.5326 16.8423 17.8452 17.1548C18.1577 17.4674 18.3333 17.8913 18.3333 18.3333V30C18.3333 30.442 18.1577 30.8659 17.8452 31.1785C17.5326 31.4911 17.1087 31.6667 16.6667 31.6667C16.2246 31.6667 15.8007 31.4911 15.4882 31.1785C15.1756 30.8659 15 30.442 15 30V18.3333C15 17.8913 15.1756 17.4674 15.4882 17.1548C15.8007 16.8423 16.2246 16.6667 16.6667 16.6667ZM23.3333 16.6667C23.7754 16.6667 24.1993 16.8423 24.5118 17.1548C24.8244 17.4674 25 17.8913 25 18.3333V30C25 30.442 24.8244 30.8659 24.5118 31.1785C24.1993 31.4911 23.7754 31.6667 23.3333 31.6667C22.8913 31.6667 22.4674 31.4911 22.1548 31.1785C21.8423 30.8659 21.6667 30.442 21.6667 30V18.3333C21.6667 17.8913 21.8423 17.4674 22.1548 17.1548C22.4674 16.8423 22.8913 16.6667 23.3333 16.6667Z"
                                                    fill="#fff" />
                                            </svg></button>
                                        </div>
                                    ))}

                                </div>
                                <label htmlFor="imageInput">
                                    <span>
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="60" height="60" rx="20" fill="white" />
                                            <path
                                                d="M15 5C20.5138 5 25 9.48625 25 15C25 20.5138 20.5138 25 15 25C9.48625 25 5 20.5138 5 15C5 9.48625 9.48625 5 15 5ZM15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5ZM21.25 13.75H16.25V8.75H13.75V13.75H8.75V16.25H13.75V21.25H16.25V16.25H21.25V13.75Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                </label>
                            </div>

                            <label htmlFor="variacao">• Variação:*</label>
                            {variacoes.map((variacao, index) => (
                                <div key={index} class="variacao">
                                    <label htmlFor={`tamanho-${index}`}>Tamanho:</label>
                                    <input id={`tamanho-${index}`} type="text" name="tamanho" value={variacao.tamanho} onChange={(event) => handleVariacaoChange(index, event)} />
                                    <label htmlFor={`cor-${index}`}>Cor:</label>
                                    <input id={`cor-${index}`} type="text" name="cor" value={variacao.cor} onChange={(event) => handleVariacaoChange(index, event)} />
                                    <label htmlFor={`quantidade-${index}`}>Quantidade:</label>
                                    <input id={`quantidade-${index}`} type="text" name="quantidade" value={variacao.quantidade} onChange={(event) => handleVariacaoChange(index, event)} />
                                    {variacoes.length > 1 && (
                                        <button onClick={() => deleteVariacao(index)}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 6.66683V5.00016C15 4.55814 15.1756 4.13421 15.4882 3.82165C15.8007 3.50909 16.2246 3.3335 16.6667 3.3335H23.3333C23.7754 3.3335 24.1993 3.50909 24.5118 3.82165C24.8244 4.13421 25 4.55814 25 5.00016V6.66683H31.6667C32.5507 6.66683 33.3986 7.01802 34.0237 7.64314C34.6488 8.26826 35 9.11611 35 10.0002V11.6668C35 12.5509 34.6488 13.3987 34.0237 14.0239C33.3986 14.649 32.5507 15.0002 31.6667 15.0002H31.445L30.3117 32.0002C30.2271 33.2656 29.6648 34.4517 28.7386 35.3181C27.8125 36.1846 26.5916 36.6667 25.3233 36.6668H14.71C13.4428 36.6668 12.2229 36.1856 11.2968 35.3206C10.3708 34.4555 9.80784 33.2711 9.72167 32.0068L8.56167 15.0002H8.33333C7.44928 15.0002 6.60143 14.649 5.97631 14.0239C5.35119 13.3987 5 12.5509 5 11.6668V10.0002C5 9.11611 5.35119 8.26826 5.97631 7.64314C6.60143 7.01802 7.44928 6.66683 8.33333 6.66683H15ZM31.6667 10.0002H8.33333V11.6668H31.6667V10.0002ZM11.9017 15.0002L13.0467 31.7802C13.0754 32.2017 13.2631 32.5966 13.5719 32.8849C13.8807 33.1733 14.2875 33.3336 14.71 33.3335H25.3233C25.7464 33.3336 26.1536 33.1728 26.4625 32.8837C26.7714 32.5946 26.9587 32.1989 26.9867 31.7768L28.1033 15.0002H11.9033H11.9017ZM16.6667 16.6668C17.1087 16.6668 17.5326 16.8424 17.8452 17.155C18.1577 17.4675 18.3333 17.8915 18.3333 18.3335V30.0002C18.3333 30.4422 18.1577 30.8661 17.8452 31.1787C17.5326 31.4912 17.1087 31.6668 16.6667 31.6668C16.2246 31.6668 15.8007 31.4912 15.4882 31.1787C15.1756 30.8661 15 30.4422 15 30.0002V18.3335C15 17.8915 15.1756 17.4675 15.4882 17.155C15.8007 16.8424 16.2246 16.6668 16.6667 16.6668ZM23.3333 16.6668C23.7754 16.6668 24.1993 16.8424 24.5118 17.155C24.8244 17.4675 25 17.8915 25 18.3335V30.0002C25 30.4422 24.8244 30.8661 24.5118 31.1787C24.1993 31.4912 23.7754 31.6668 23.3333 31.6668C22.8913 31.6668 22.4674 31.4912 22.1548 31.1787C21.8423 30.8661 21.6667 30.4422 21.6667 30.0002V18.3335C21.6667 17.8915 21.8423 17.4675 22.1548 17.155C22.4674 16.8424 22.8913 16.6668 23.3333 16.6668Z" fill="#898989" />
                                        </svg></button>
                                    )}
                                </div>
                            ))}
                            <button id="adicionar-variacao" onClick={addVariacao}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15 5C20.5138 5 25 9.48625 25 15C25 20.5138 20.5138 25 15 25C9.48625 25 5 20.5138 5 15C5 9.48625 9.48625 5 15 5ZM15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5ZM21.25 13.75H16.25V8.75H13.75V13.75H8.75V16.25H13.75V21.25H16.25V16.25H21.25V13.75Z"
                                        fill="black" />
                                </svg>Adicionar Variação
                            </button>

                            <input type="submit" value="CADASTRAR"></input>
                        </form>
                    </div>
                </div>
            </main>

            <Rodape />

        </section>
    );
}