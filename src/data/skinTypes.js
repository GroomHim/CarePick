/**
 * 피부 타입 데이터 및 추천 상품 정보
 * 각 피부 타입은 고유 ID, 이름, 설명 및 추천 상품 목록을 포함합니다.
 */
export const skinTypes = {
  // 건성 타입들
  "건성 1번": {
    id: 1,
    name: "건성 1번",
    description: "건조하고 예민하며 착색이 잘 되는 피부타입입니다. 순한 성분의 보습제품과 자외선 차단제 사용이 필수적입니다. 과도한 각질 제거를 피하고 보습에 집중하세요.",
    products: [
      {
        type: "토너",
        name: "[아비브] 어성초 카밍 토너 스킨부스터",
        price: "24,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "수분크림",
        name: "[라로슈포제] 시카플라스트 밤 B5",
        price: "32,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "로션",
        name: "[아토팜] 탑투토 지성 로션",
        price: "22,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      }
    ]
  },
  
  "건성 2번": {
    id: 2,
    name: "건성 2번",
    description: "건조하고 착색이 잘 되지만 민감하지 않은 피부타입입니다. 풍부한 보습제와 함께 미백 기능성 제품 사용이 도움이 됩니다.",
    products: [
      {
        type: "토너",
        name: "[이니스프리] 그린티 씨드 토너",
        price: "18,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "수분크림",
        name: "[이니스프리] 그린티 씨드 크림",
        price: "29,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "로션",
        name: "[코스알엑스] 갈락토미세스 로션",
        price: "28,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      }
    ]
  },
  
  "건성 3번": {
    id: 3,
    name: "건성 3번",
    description: "건조하고 예민하지만 착색은 잘 되지 않는 피부타입입니다. 무자극 보습 제품을 사용하고 자극적인 성분은 피하세요.",
    products: [
      {
        type: "토너",
        name: "[일리윤] 프로바이오틱스 스킨 토너",
        price: "17,900원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "수분크림",
        name: "[일리윤] 세라마이드 아토 집중 크림",
        price: "19,900원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "로션",
        name: "[아벤느] 시칼파트 로션",
        price: "26,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      }
    ]
  },
  
  "건성 4번": {
    id: 4,
    name: "건성 4번",
    description: "건조하지만 민감하지 않고 착색도 잘 되지 않는 피부타입입니다. 풍부한 영양감의 크림과 오일 제품이 적합합니다.",
    products: [
      {
        type: "토너",
        name: "[토리든] 다이브인 저분자 히알루론산 토너",
        price: "23,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "수분크림",
        name: "[세라베] 모이스처라이징 크림",
        price: "25,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "로션",
        name: "[토리든] 다이브인 세럼 로션",
        price: "26,500원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      }
    ]
  },
  
  // 중성 타입들
  "중성 1번": {
    id: 5,
    name: "중성 1번",
    description: "균형 잡힌 피부이지만 예민하고 착색이 잘 됩니다. 자외선 차단과 저자극 제품 사용이 중요합니다.",
    products: [
      {
        type: "토너",
        name: "[식물나라] 알로에 수딩 토너",
        price: "12,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "수분크림",
        name: "[아이소이] 불가리안 로즈 진정 크림",
        price: "32,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "로션",
        name: "[아이소이] 불가리안 로즈 진정 로션",
        price: "28,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      }
    ]
  },
  
  "중성 2번": {
    id: 6,
    name: "중성 2번",
    description: "균형 잡힌 피부이고 민감하지 않지만 착색이 잘 됩니다. 자외선 차단과 함께 미백 기능성 제품 사용이 권장됩니다.",
    products: [
      {
        type: "토너",
        name: "[미쟝센] 퍼펙트 토너",
        price: "16,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "수분크림",
        name: "[닥터지] 레드 블레미쉬 크림",
        price: "19,800원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "로션",
        name: "[닥터지] 브라이트닝 로션",
        price: "21,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      }
    ]
  },
  
  "중성 3번": {
    id: 7,
    name: "중성 3번",
    description: "균형 잡힌 피부이지만 예민한 편입니다. 저자극 클렌징과 진정 효과가 있는 제품이 좋습니다.",
    products: [
      {
        type: "토너",
        name: "[에스트라] 아토베리어365 토너",
        price: "27,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "수분크림",
        name: "[에스트라] 아토베리어365 크림",
        price: "31,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "로션",
        name: "[바이오더마] 센시비오 로션",
        price: "22,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      }
    ]
  },
  
  "중성 4번": {
    id: 8,
    name: "중성 4번",
    description: "가장 이상적인 피부타입으로, 균형이 잘 잡혀 있고 문제가 적습니다. 기초 제품으로 꾸준히 관리해주세요.",
    products: [
      {
        type: "토너",
        name: "[아누아] 어성초 77 토너",
        price: "28,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "수분크림",
        name: "[아누아] 어성초 80 크림",
        price: "32,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "로션",
        name: "[클리오] 킬커버 로션",
        price: "30,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      }
    ]
  },
  
  // 지성 타입들
  "지성 1번": {
    id: 9,
    name: "지성 1번",
    description: "피지가 많고 예민하며 착색이 잘 되는 피부타입입니다. 오일프리 제품과 자극이 적은 각질 제거제가 도움이 됩니다.",
    products: [
      {
        type: "토너",
        name: "[아누아] 독도 토너",
        price: "24,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "수분크림",
        name: "[닥터지] 레드 블레미쉬 클리어 수딩 크림",
        price: "28,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "로션",
        name: "[아이소이] 포어타이트닝 로션",
        price: "26,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      }
    ]
  },
  
  "지성 2번": {
    id: 10,
    name: "지성 2번",
    description: "피지 분비가 많고 착색이 잘 되지만 민감하지 않은 피부타입입니다. 모공 케어와 미백 기능성 제품이 효과적입니다.",
    products: [
      {
        type: "토너",
        name: "[코스알엑스] BHA 블랙헤드 파워 리퀴드",
        price: "21,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "수분크림",
        name: "[이니스프리] 그린티 밸런싱 크림 EX",
        price: "25,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "로션",
        name: "[메디힐] 티트리 에센셜 로션",
        price: "18,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      }
    ]
  },
  
  "지성 3번": {
    id: 11,
    name: "지성 3번",
    description: "피지 분비가 많고 예민하지만 착색은 잘 되지 않는 피부타입입니다. 진정 효과가 있는 가벼운 텍스처의 제품이 좋습니다.",
    products: [
      {
        type: "토너",
        name: "[라운드랩] 1025 독도 토너",
        price: "22,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "수분크림",
        name: "[피지오겔] 레드 수딩 AI 크림",
        price: "33,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "로션",
        name: "[라운드랩] 자작나무 로션",
        price: "25,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      }
    ]
  },
  
  "지성 4번": {
    id: 12,
    name: "지성 4번",
    description: "피지 분비가 많지만 다른 문제는 적은 피부타입입니다. 산뜻한 사용감의 가벼운 제품과 모공 관리 제품이 적합합니다.",
    products: [
      {
        type: "토너",
        name: "[이니스프리] 화산송이 포어 토너",
        price: "16,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "수분크림",
        name: "[이니스프리] 화산송이 포어 크림",
        price: "20,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      },
      {
        type: "로션",
        name: "[더페이스샵] 잉크래스팅 로션",
        price: "27,000원",
        image: "https://d33ur1yh5ph6b5.cloudfront.net/52fe9ac2-ee08-4824-b85a-70d4352a56dd-mid"
      }
    ]
  }
};

/**
 * 로컬스토리지에서 피부 타입 정보를 가져오는 함수
 * 
 * @returns {object|null} 피부 타입 정보 또는 기본값
 */
export function getSkinTypeFromLocalStorage() {
  if (typeof window === 'undefined') {
    return null; // 서버 사이드 렌더링 시 null 반환
  }
  
  try {
    // 로컬스토리지에서 최종 피부 타입 결과 가져오기
    const finalSkinType = localStorage.getItem("finalSkinType");
    
    // 피부 타입 정보가 없으면 null 반환
    if (!finalSkinType || !skinTypes[finalSkinType]) {
      console.error('피부 타입을 찾을 수 없음:', finalSkinType);
      return null;
    }
    
    // 해당 타입 정보 반환
    return {
      typeCode: finalSkinType,
      typeInfo: skinTypes[finalSkinType]
    };
  } catch (error) {
    console.error("피부 타입 정보 가져오기 실패:", error);
    return null;
  }
} 