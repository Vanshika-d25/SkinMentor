const products = {
  Oily: [
    { id: 1, name: 'Oil-Free Cleanser', description: 'Controls excess oil and acne', price: '$12' },
    { id: 2, name: 'Matte Moisturizer', description: 'Hydrates without shine', price: '$15' },
    { id: 3, name: 'Charcoal Face Wash', description: 'Deep cleansing for oily skin', price: '$10' },
    { id: 4, name: 'BHA Serum', description: 'Unclogs pores and prevents breakouts', price: '$16' },
    { id: 5, name: 'Oil-Control Toner', description: 'Minimizes pores and oil', price: '$11' },
    { id: 6, name: 'Green Tea Moisturizer', description: 'Soothes and balances oil', price: '$14' },
    { id: 7, name: 'Clay Mask', description: 'Absorbs excess sebum', price: '$13' },
    { id: 8, name: 'Niacinamide Serum', description: 'Regulates oil production', price: '$17' },
    { id: 9, name: 'Gel Sunscreen', description: 'Non-greasy sun protection', price: '$12' },
    { id: 10, name: 'Tea Tree Cleanser', description: 'Antibacterial and oil-controlling', price: '$13' },
    { id: 11, name: 'Micellar Water', description: 'Oil-free makeup remover', price: '$9' },
    { id: 12, name: 'Lemon Face Pack', description: 'Brightens and mattifies skin', price: '$8' },
    { id: 13, name: 'Water-Based Serum', description: 'Light hydration for oily skin', price: '$14' },
    { id: 14, name: 'Acne Spot Treatment', description: 'Targets active pimples', price: '$10' },
    { id: 15, name: 'Oil-Free Primer', description: 'Preps skin without shine', price: '$13' }
  ],

  Dry: [
    { id: 16, name: 'Hydrating Cream', description: 'Deep moisturization for dry skin', price: '$18' },
    { id: 17, name: 'Creamy Cleanser', description: 'Gentle cleanser for dry skin', price: '$10' },
    { id: 18, name: 'Hyaluronic Acid Serum', description: 'Attracts moisture to skin', price: '$15' },
    { id: 19, name: 'Ceramide Moisturizer', description: 'Restores skin barrier', price: '$19' },
    { id: 20, name: 'Shea Butter Balm', description: 'Extra hydration for dry patches', price: '$13' },
    { id: 21, name: 'Milk Cleanser', description: 'Nourishes while cleansing', price: '$11' },
    { id: 22, name: 'Overnight Repair Cream', description: 'Deep hydration while you sleep', price: '$17' },
    { id: 23, name: 'Moisture Mask', description: 'Intense hydration boost', price: '$14' },
    { id: 24, name: 'Glycerin Toner', description: 'Hydrating and soothing', price: '$12' },
    { id: 25, name: 'Hydrating Mist', description: 'Instant moisture throughout the day', price: '$10' },
    { id: 26, name: 'Nourishing Serum', description: 'Boosts hydration and smoothness', price: '$16' },
    { id: 27, name: 'Avocado Moisturizer', description: 'Rich in fatty acids', price: '$15' },
    { id: 28, name: 'Gentle Exfoliating Cream', description: 'Removes dead skin without drying', price: '$13' },
    { id: 29, name: 'Barrier Repair Oil', description: 'Locks in hydration', price: '$18' },
    { id: 30, name: 'Deep Nourish Lotion', description: 'Softens and hydrates', price: '$12' }
  ],

  Sensitive: [
    { id: 31, name: 'Soothing Serum', description: 'Calms irritated skin', price: '$14' },
    { id: 32, name: 'Fragrance-Free Cleanser', description: 'Non-irritating formula', price: '$13' },
    { id: 33, name: 'Aloe Vera Gel', description: 'Cools and soothes skin', price: '$9' },
    { id: 34, name: 'Rice Water Toner', description: 'Gentle hydration and glow', price: '$11' },
    { id: 35, name: 'Sensitive Skin Moisturizer', description: 'No fragrance or parabens', price: '$15' },
    { id: 36, name: 'Chamomile Cleanser', description: 'Mild and soothing', price: '$10' },
    { id: 37, name: 'Cica Cream', description: 'Reduces redness and irritation', price: '$14' },
    { id: 38, name: 'SPF 50 Mineral Sunscreen', description: 'Non-comedogenic and gentle', price: '$16' },
    { id: 39, name: 'Barrier Repair Lotion', description: 'Strengthens sensitive skin', price: '$13' },
    { id: 40, name: 'Calming Face Mist', description: 'Soothes on-the-go', price: '$9' },
    { id: 41, name: 'Oatmeal Mask', description: 'Reduces flare-ups', price: '$10' },
    { id: 42, name: 'Fragrance-Free Night Cream', description: 'Restores overnight', price: '$17' },
    { id: 43, name: 'Gentle Eye Cream', description: 'No stinging or irritation', price: '$12' },
    { id: 44, name: 'Botanical Cleanser', description: 'Plant-based soothing action', price: '$13' },
    { id: 45, name: 'Anti-Redness Serum', description: 'Targets skin flushing and redness', price: '$15' }
  ],

  Combination: [
    { id: 46, name: 'Balancing Toner', description: 'For both oily and dry zones', price: '$13' },
    { id: 47, name: 'Dual Moisturizer', description: 'Hydrates where needed', price: '$15' },
    { id: 48, name: 'Gel Cream', description: 'Light yet hydrating formula', price: '$12' },
    { id: 49, name: 'Exfoliating Toner', description: 'Controls oil and renews skin', price: '$11' },
    { id: 50, name: 'Clarifying Face Wash', description: 'Deep cleans without dryness', price: '$13' },
    { id: 51, name: 'T-Zone Mask', description: 'Targets oily areas', price: '$10' },
    { id: 52, name: 'Day-Night Duo Cream', description: 'Perfect for mixed zones', price: '$16' },
    { id: 53, name: 'Oil Control Moisturizer', description: 'Hydrates dry spots, mattifies oily ones', price: '$14' },
    { id: 54, name: 'Vitamin B3 Serum', description: 'Improves overall texture', price: '$15' },
    { id: 55, name: 'Gentle Exfoliant', description: 'Removes buildup, non-drying', price: '$12' },
    { id: 56, name: 'Face Mist with Witch Hazel', description: 'Tones and refreshes', price: '$9' },
    { id: 57, name: 'Balancing Sunscreen', description: 'No white cast, non-greasy', price: '$13' },
    { id: 58, name: 'Cleansing Balm', description: 'Melts makeup without stripping', price: '$11' },
    { id: 59, name: 'Hydra-Gel Mask', description: 'Soothes and balances', price: '$14' },
    { id: 60, name: 'Pore Refining Cleanser', description: 'Balances oil and shrinks pores', price: '$10' }
  ],

  Normal: [
    { id: 61, name: 'Gentle Foaming Cleanser', description: 'Maintains skin balance', price: '$11' },
    { id: 62, name: 'Daily Moisturizer', description: 'Lightweight and effective', price: '$14' },
    { id: 63, name: 'Vitamin E Cream', description: 'Nourishes and protects', price: '$13' },
    { id: 64, name: 'SPF 30 Daily Lotion', description: 'Protects and hydrates', price: '$12' },
    { id: 65, name: 'Aloe Toner', description: 'Refreshes and soothes', price: '$10' },
    { id: 66, name: 'Refreshing Face Mist', description: 'Keeps skin feeling fresh', price: '$9' },
    { id: 67, name: 'Brightening Serum', description: 'Evens skin tone', price: '$15' },
    { id: 68, name: 'Glow Mask', description: 'Boosts radiance', price: '$13' },
    { id: 69, name: 'Foaming Gel Wash', description: 'Effective yet gentle', price: '$11' },
    { id: 70, name: 'Nourishing Oil', description: 'Locks in moisture', price: '$16' },
    { id: 71, name: 'Night Repair Cream', description: 'Rejuvenates overnight', price: '$17' },
    { id: 72, name: 'Skin Softening Lotion', description: 'Smooth and hydrated skin', price: '$12' },
    { id: 73, name: 'Hydra Boost Gel', description: 'Refreshes tired skin', price: '$14' },
    { id: 74, name: 'Micellar Cleanser', description: 'Removes dirt without residue', price: '$10' },
    { id: 75, name: 'Lightweight Sunscreen', description: 'Daily UVA/UVB protection', price: '$13' }
  ]
};

module.exports = products;
