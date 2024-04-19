import { PrismaClient, Cliente } from '@prisma/client';

const prisma = new PrismaClient();

interface ClienteData {
  cpf: string;
  datanasc: Date;
  email: string;
  celular: number;
  pnome: string;
  sobrenome: string;
}

async function createCliente(clienteData: ClienteData): Promise<Cliente> {
  return prisma.cliente.create({
    data: clienteData,
  });
}

async function updateCliente(id: number, clienteData: Cliente) {
  return prisma.cliente.update({
    where: { id },
    data: clienteData,
  });
}

async function deleteCliente(id: number) {
  return prisma.cliente.delete({
    where: { id },
  });
}

const clienteData: ClienteData = {
  cpf: "12345678900",
  datanasc: new Date('1990-01-01T00:00:00Z'),
  email: 'girlana@example.com',
  celular: 123456789,
  pnome: 'Fulano',
  sobrenome: 'Silva',
};

createCliente(clienteData)
  .then((clienteCriado) => {
    console.log('Cliente criado:', clienteCriado);
  })
  .catch((error) => {
    console.error('Erro ao criar cliente:', error);
  });

// createCliente(clienteData)
//   .then((clienteCriado) => {
//     console.log('Cliente criado:', clienteCriado);
//   })
//   .catch((error) => {
//     console.error('Erro ao criar cliente:', error);
//   });
