<template>
    <div class="container">
        <app-new-quote @quoteAdded="addNewQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './components/quote/QuoteGrid.vue';
    import NewQuote from './components/quote/NewQuote.vue';
    export default {
        data: function() {
            return {
                'quotes': [
                    'Quote 1 to do',
                    'Quote 2 to do',
                    'Quote 3 to do'
                ]
            }
        },
        methods: {
            addNewQuote(quote) {
                this.quotes.push(quote);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        }
    }
</script>

<style>
</style>
