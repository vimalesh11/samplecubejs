cube(`Suppliers`, {
    sql: `SELECT * FROM public.suppliers`,

    joins: {

    },

    measures: {
        count: {
            type: `count`,
            drillMembers: [id]
        }
    },

    dimensions: {
        email: {
            sql: `email`,
            type: `string`
        },

        id: {
            sql: `id`,
            type: `number`,
            primaryKey: true
        },

        company: {
            sql: `company`,
            type: `string`
        },

        address: {
            sql: `address`,
            type: `string`
        },

        createdAt: {
            sql: `created_at`,
            type: `time`
        }
    }
});