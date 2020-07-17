const AssessmentQuestionValues = [
  {
    text: 'Illness More Than Twice A Year',
    scores: {
      'immune': 3,
      'respiratory': 3,
    }
  },
  {
    text: 'Body Odor And/Or Bad Breath',
    scores: {
      'digestive': 1,
      'intestinal': 3,
      'respiratory': 1,
      'urinary': 1,
    }
  },
  {
    text: 'Difficulty Digesting Certain Foods',
    scores: {
      'digestive': 3,
      'hepatic': 2,
      'immune': 1,
    }
  },
  {
    text: 'Less Than 3 Servings Of Fruits And Veggies Daily',
    scores: {
      'digestive': 1,
      'intestinal': 2,
      'circulatory': 1,
      'immune': 2,
      'urinary': 1,
    }
  },
  {
    text: 'Monthly Female Concerns',
    scores: {
      'hepatic': 2,
      'intestinal': 1,
      'urinary': 1,
      'glandular': 3,
    }
  },
  {
    text: 'Recent Or Frequent Use Of Antibiotics',
    scores: {
      'intestinal': 2,
      'immune': 3,
      'respiratory': 1,
    }
  },
  {
    text: 'Regular Consumption Of Alcohol',
    scores: {
      'hepatic': 5,
      'nervous': 1,
      'glandular': 1,
    }
  },
  {
    text: 'Gum Problems Or Redness On Nose',
    scores: {
      'circulatory': 2,
    }
  },
  {
    text: 'Food Allergies',
    scores: {
      'digestive': 3,
      'hepatic': 2,
      'immune': 1,
      'respiratory': 2,
    }
  },
  {
    text: 'Puffiness Under Eyes',
    scores: {
      'urinary': 3,
    }
  },
  {
    text: 'Smoking',
    scores: {
      'hepatic': 1,
      'circulatory': 3,
      'nervous': 2,
      'immune': 2,
      'respiratory': 5,
    }
  },
  {
    text: 'Poor Concentration Or Memory',
    scores: {
      'circulatory': 2,
      'nervous': 1,
      'glandular': 1,
    }
  },
  {
    text: 'Heavy Coating On Tongue',
    scores: {
      'digestive': 3,
      'intestinal': 1,
      'immune': 1,
      'respiratory': 1,
    }
  },
  {
    text: 'Belching Or Gas After Meals',
    scores: {
      'digestive': 3,
      'intestinal': 1,
    }
  },
  {
    text: 'Stressful Lifestyle',
    scores: {
      'circulatory': 3,
      'nervous': 2,
      'immune': 2,
      'glandular': 1,
    }
  },
  {
    text: 'Skin/Complexion Problems',
    scores: {
      'hepatic': 2,
      'intestinal': 2,
      'urinary': 2,
      'glandular': 1,
      'structural': 2,
    }
  },
  {
    text: 'Cravings For Sweets Or Junk Food',
    scores: {
      'immune': 1,
      'glandular': 2,
    }
  },
  {
    text: 'Daily Consumption Of Dairy Products',
    scores: {
      'intestinal': 2,
      'respiratory': 2,
    }
  },
  {
    text: 'Feeling Down, Uninterested Or Moody',
    scores: {
      'hepatic': 3,
      'intestinal': 1,
      'nervous': 3,
      'glandular': 1,
    }
  },
  {
    text: 'Difficulty Getting To Sleep, Lack Of Sleep',
    scores: {
      'hepatic': 2,
      'nervous': 1,
      'glandular': 1,
    }
  },
  {
    text: 'Menopausal Concerns',
    scores: {
      'hepatic': 1,
      'nervous': 1,
      'glandular': 1,
      'structural': 2,
    }
  },
  {
    text: 'Frequent Urination Or Urinary Concerns',
    scores: {
      'urinary': 4,
    }
  },
  {
    text: 'Age-Related Health Problems',
    scores: {
      'digestive': 1,
      'circulatory': 2,
      'immune': 1,
      'glandular': 1,
      'structural': 2,
    }
  },
  {
    text: 'Sore Or Painful Joints',
    scores: {
      'intestinal': 1,
      'immune': 1,
      'urinary': 1,
      'structural': 3,
    }
  },
  {
    text: 'Difficulty Maintaining Ideal Weight',
    scores: {
      'digestive': 1,
      'nervous': 1,
      'urinary': 1,
      'glandular': 1,
    }
  },
  {
    text: 'Lack Of Energy Or Endurance',
    scores: {
      'circulatory': 1,
      'immune': 2,
      'respiratory': 1,
      'glandular': 1,
    }
  },
  {
    text: 'Diet High In Meat And Grains',
    scores: {
      'digestive': 1,
      'intestinal': 2,
      'circulatory': 1,
      'urinary': 3,
      'structural': 1,
    }
  },
  {
    text: 'Heavy Mucus Production Or Feeling Congested',
    scores: {
      'digestive': 1,
      'intestinal': 1,
      'respiratory': 2,
    }
  },
  {
    text: 'Fewer Than Two Bowel Movements Per Day',
    scores: {
      'digestive': 1,
      'hepatic': 1,
      'intestinal': 3,
      'nervous': 1,
      'respiratory': 1,
    }
  },
  {
    text: 'Weak Knees, Ankles Or Back',
    scores: {
      'urinary': 2,
      'structural': 3,
    }
  },
  {
    text: 'Low Sex Drive',
    scores: {
      'circulatory': 1,
      'nervous': 1,
      'glandular': 2,
    }
  },
  {
    text: 'Brittle Or Easily Broken Fingernails',
    scores: {
      'digestive': 1,
      'structural': 2,
    }
  },
  {
    text: 'Dry, Damaged Or Dull Hair',
    scores: {
      'digestive': 1,
      'glandular': 1,
      'structural': 2,
    }
  },
  {
    text: 'Daily Consumption Of Fried Foods',
    scores: {
      'digestive': 1,
      'hepatic': 2,
      'circulatory': 3,
      'nervous': 1,
    }
  },
  {
    text: 'Frequently Feeling Fearful Or Timid',
    scores: {
      'nervous': 2,
      'urinary': 2,
      'glandular': 1,
    }
  },
  {
    text: 'Cold Hands And Feet',
    scores: {
      'circulatory': 3,
      'glandular': 1,
    }
  },
  {
    text: 'Muscle Cramps Or Spasms',
    scores: {
      'nervous': 2,
      'structural': 1,
    }
  },
  {
    text: 'Exposure To Air Pollution Daily',
    scores: {
      'immune': 1,
      'respiratory': 2,
    }
  },
  {
    text: 'Daily Consumption Of Caffeinated Beverages',
    scores: {
      'nervous': 1,
      'glandular': 1,
      'structural': 2,
    }
  },
  {
    text: 'Shallow Or Difficult Breathing',
    scores: {
      'immune': 1,
      'respiratory': 2,
    }
  },
  {
    text: 'Restless Sleep Or Waking Up Frequently',
    scores: {
      'hepatic': 2,
      'nervous': 1,
      'urinary': 1,
      'glandular': 1,
    }
  },
  {
    text: 'Recurrent Yeast Or Fungal Infections',
    scores: {
      'digestive': 1,
      'intestinal': 2,
      'immune': 2,
      'respiratory': 1,
      'urinary': 1,
    }
  },
  {
    text: 'Weak Bones, Teeth Or Cartilage',
    scores: {
      'digestive': 1,
      'urinary': 2,
      'structural': 3,
    }
  },
  {
    text: 'Feeling Anxious Or Worried',
    scores: {
      'digestive': 1,
      'nervous': 3,
      'glandular': 1,
    }
  },
  {
    text: 'Feeling Irritable Or Easily Angered',
    scores: {
      'hepatic': 2,
      'circulatory': 1,
      'nervous': 1,
      'glandular': 2,
    }
  },
  {
    text: "Don't Exercise Regularly",
    scores: {
      'circulatory': 2,
      'structural': 2,
    }
  },
  {
    text: 'Respiratory Concerns',
    scores: {
      'intestinal': 1,
      'immune': 1,
      'respiratory': 3,
    }
  }
]

export default AssessmentQuestionValues