import { PricingPlan } from "src/app/shared/widget/pricing-card/pricing-card.model";


const PLANS: PricingPlan[] = [
    {
        id: 1,
        name: 'Professional Pack',
        icon: 'dripicons-user',
        price: 19,
        features: ['10 GB Storage', '500 GB Bandwidth', 'No Domain', '1 User', 'Email Support', '24x7 Support'],
        recommended: false
    },
    {
        id: 2,
        name: 'Business Pack',
        icon: 'dripicons-briefcase',
        price: 29,
        features: ['50 GB Storage', '900 GB Bandwidth', '2 Domain', '10 User', 'Email Support', '24x7 Support'],
        recommended: true
    },
    {
        id: 3,
        name: 'Professional Pack',
        icon: 'dripicons-store',
        price: 39,
        features: ['100 GB Storage', 'Unlimited Bandwidth', '10 Domain', 'Unlimited User', 'Email Support', '24x7 Support'],
        recommended: false
    }
];

export { PLANS };
