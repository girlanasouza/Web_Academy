import { Response, Request } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import {
  createProduto,
  checkNomeIsAvaliable,
  ListProdutos,
  readProduto,
  updateProduto,
  deleteProduto,
} from "./produto.service";
import { CreateProdutoDto, UpdateProdutoDto } from "./produto.types";

const index = async (req: Request, res: Response) => {
  try {
    const produtos = await ListProdutos();
    res.status(StatusCodes.OK).json(produtos);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Adiciona um novo produto na base.'
 #swagger.parameters['body'] = {
 in: 'body',
 schema: { $ref: '#/definitions/CreateProduto' }
 }
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/Produto' }
 }
 */
  const produto = req.body as CreateProdutoDto;
  try {
    if (await checkNomeIsAvaliable(produto.nome)) {
      const novoProduto = await createProduto(produto);
      res.status(StatusCodes.CREATED).json(novoProduto);
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const read = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Recupera dados de um produto específico.'
 #swagger.parameters['id'] = { description: 'ID do produto' }
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/Produto' } */
  const { id } = req.params;
  try {
    const produto = await readProduto(id);
    if (!produto)
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(produto);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const produto: UpdateProdutoDto = req.body;
  try {
    if (await checkNomeIsAvaliable(produto.nome, id)) {
      const updatedProduto = await updateProduto(id, produto);
      res.status(StatusCodes.OK).json(updatedProduto);
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedProduto = await deleteProduto(id);
    res.status(StatusCodes.NO_CONTENT).json(deletedProduto);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default { index, create, read, update, remove };
