/**
 * 피부 타입 데이터 및 추천 상품 정보
 * 각 피부 타입은 고유 ID, 이름, 설명 및 추천 상품 목록을 포함합니다.
 */
export const skinTypes = {
  // 건성 타입들
  "건성 1번": {
    id: 1,
    name: "건성 1번",
    description: "건성 1번 타입 피부는 건성으로 인해 수분이 부족하고, 피부가 예민하여 외부 자극에 민감하게 반응할 수 있는 유형입니다. 또한 착색도가 높아 색소침착이 발생하기 쉬운 특징이 있습니다. 이러한 피부는 수분 공급과 진정 케어에 특히 집중해야 하며, 촉촉함을 유지할 수 있는 고보습 제품을 사용하는 것이 중요합니다. 나이아신아마이드와 같은 미백 성분이 포함된 화장품을 사용하면 색소침착 완화에 도움이 됩니다. 피부가 예민하기 때문에 자극이 적은 약산성 제품을 선택하고, 레티놀 등 강한 기능성 성분을 사용할 때는 저농도부터 시작해 피부 적응 과정을 거치는 것이 좋습니다. 외출 시에는 자외선 차단제를 필수적으로 사용해 추가적인 착색을 방지해야 합니다. 또한, 수분과 영양을 동시에 공급할 수 있는 나이트 크림이나 수면 팩을 활용해 밤 사이 피부 장벽을 강화하는 것도 좋은 방법입니다.",
    products: [
      {
        type: "앰플",
        name: "라운드랩 소나무 진정 시카 앰플, 30ml,",
        price: "24,000원",
        image: "https://thumbnail7.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/344522546885153-436fab76-0284-4a11-b164-2c1b64e56136.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/6498274767?itemId=19169365267&vendorItemId=86287621912&q=%EB%9D%BC%EC%9A%B4%EB%93%9C%EB%9E%A9+%EC%A7%84%EC%A0%95+%EC%8B%9C%EC%B9%B4+%EC%95%B0%ED%94%8C&itemsCount=27&searchId=5385daa87220957&rank=0&searchRank=0&isAddedCart="
      },
      {
        type: "크림(밤)",
        name: "아비노베이비 더멕사 아토 크림, 206g",
        price: "32,000원",
        image: "https://thumbnail6.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/6ea3/97e79698865af1fdc89ec863003329a41ed686c022256a912c709161cdd0.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/5195257772?itemId=7224430173&vendorItemId=84660061588&q=%EC%95%84%EB%B9%84%EB%85%B8%EB%B2%A0%EC%9D%B4%EB%B9%84+%EB%8D%94%EB%A9%95%EC%82%AC+%EC%95%84%ED%86%A0+%ED%81%AC%EB%A6%BC&itemsCount=26&searchId=b66148d1830230&rank=1&searchRank=1&isAddedCart="
      },
      {
        type: "썬크림",
        name: "후시다인 더마 트러블 징크 카밍 선크림 SPF50+",
        price: "22,000원",
        image: "https://thumbnail9.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/877fc830-a115-4d11-a53d-4665b8a46ca46941534804648332185.png",
        purchaseLink: "https://www.coupang.com/vp/products/7941544246?itemId=23238654270&vendorItemId=90775070608&q=%ED%9B%84%EC%8B%9C%EB%8B%A4%EC%9D%B8+%EB%8D%94%EB%A7%88+%ED%8A%B8%EB%9F%AC%EB%B8%94+%EC%A7%95%ED%81%AC+%EC%B9%B4%EB%B0%8D+%EC%84%A0%ED%81%AC%EB%A6%BC&itemsCount=27&searchId=f56e88e0867738&rank=1&searchRank=2&isAddedCart="
      }
    ]
  },
  "건성 2번": {
    id: 2,
    name: "건성 2번",
    description: "건성 2번 피부는 수분 부족으로 인해 건조함이 두드러지고, 착색도가 높아 색소침착이 고민이 될 수 있는 피부 유형입니다. 충분한 수분 공급과 보습을 통해 피부 장벽을 강화하는 것이 중요합니다. 나이아신아마이드 성분이 포함된 미백 기능성 화장품을 사용하면 색소침착 완화에 도움이 됩니다. 건성 피부는 쉽게 자극받기 쉬우므로, 자극이 적은 약산성 세안제와 고보습 크림을 사용하는 것이 좋습니다. 또한, 외출 시에는 자외선 차단제를 반드시 사용해 색소침착이 심화되는 것을 예방해야 합니다. 특히, 밤에는 영양이 풍부한 수면 팩을 사용해 피부를 촉촉하게 유지하는 것이 도움이 됩니다.",
    products: [
      {
        type: "세럼",
        name: "MEDIHEAL 마데카소사이드 흔적 리페어 세럼",
        price: "18,000원",
        image: "https://thumbnail9.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/67e4/16a7480afc6981a6284be800df089db1d977e46dc5bbb5b5f31bd1fe9bc7.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/8150876047?itemId=23765096779&vendorItemId=90522229170&q=%EB%A9%94%EB%94%94%ED%9E%90+%EB%A7%88%EB%8D%B0%EC%B9%B4%EC%86%9F%EC%82%AC%EC%9D%B4%EB%93%9C+%ED%9D%94%EC%A0%81+%EB%A6%AC%ED%8E%98%EC%96%B4+%EC%84%B8%EB%9F%BC&itemsCount=27&searchId=e8f5aa822887852&rank=1&searchRank=1&isAddedCart="
      },
      {
        type: "앰플",
        name: "디오디너리 나이아신아마이드 10% 플러스 징크 1% 30ml",
        price: "29,000원",
        image: "https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/e810/a52f66e43a8b366da15bd95304a1a25817d9c168f32ec54c2d90f000e42b.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/1912642276?itemId=6526770041&vendorItemId=92167719570&q=%EB%82%98%EC%9D%B4%EC%95%84%EC%8B%A0%EC%95%84%EB%A7%88%EC%9D%B4%EB%93%9C&itemsCount=27&searchId=ceab08423614432&rank=4&searchRank=7&isAddedCart="
      },
      {
        type: "크림(밤)",
        name: "라로슈포제 NEW 시카플라스트 밤 B5+ 크림, 40ml",
        price: "28,000원",
        image: "https://thumbnail7.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/1396603848785386-845ff6be-3c8f-4638-a23c-211497ebcf8a.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/7966714601?itemId=22048953474&vendorItemId=83358381384&pickType=COU_PICK&q=%EB%9D%BC%EB%A1%9C%EC%8A%88%ED%8F%AC%EC%A0%9C+%EC%8B%9C%EC%B9%B4%ED%94%8C%EB%9D%BC%EC%8A%A4%ED%8A%B8+%EB%B0%A4+b5&itemsCount=27&searchId=ff6128c92863216&rank=1&searchRank=1&isAddedCart="
      }
    ]
  },
  "건성 3번": {
    id: 3,
    name: "건성 3번",
    description: "건성 3번 피부는 수분 부족으로 인한 건조함과 함께 예민한 피부로 외부 자극에 민감하게 반응하지만, 착색도는 낮아 비교적 깨끗한 피부 톤을 유지하는 편입니다. 피부 진정을 위한 약산성 제품과 함께 수분 공급이 잘되는 보습제를 사용하는 것이 중요합니다. 레티놀과 같은 기능성 성분은 낮은 농도부터 천천히 사용해 피부 적응 과정을 거치며 사용해야 합니다. 외부 자극을 최소화하기 위해 물리적인 각질 제거보다는 수분 공급과 진정을 우선시하는 스킨케어 루틴을 권장합니다.",
    products: [
      {
        type: "수분크림",
        name: "라운드랩 1025 독도 크림, 80ml",
        price: "17,900원",
        image: "https://thumbnail9.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/1747373455775572-0d6a773a-8ae9-4957-89f1-2d9c4e5ca52a.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/7706148839?itemId=20644911814&vendorItemId=70445138125&q=%EA%B1%B4%EC%84%B1+%EC%88%98%EB%B6%84%ED%81%AC%EB%A6%BC&itemsCount=27&searchId=b22bb6814005690&rank=8&searchRank=12&isAddedCart="
      },
      {
        type: "세럼",
        name: "에스트라 에이시카365 진정 세럼, 40ml",
        price: "19,900원",
        image: "https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/554362168190369-b6cdcabd-1f8b-4032-8282-94fae5909279.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/8215955309?itemId=13748735064&vendorItemId=86293667970&q=%EC%84%B8%EB%9F%BC&itemsCount=27&searchId=22030c3810812155&rank=21&searchRank=29&isAddedCart="
      },
      {
        type: "크림(밤)",
        name: "에스트라 아토베리어365 크림 플러스",
        price: "26,000원",
        image: "https://thumbnail9.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/318268948053996-7ad2bfde-3ba7-4d5e-a628-f256e35a4b1a.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/6249008831?itemId=23021736099&vendorItemId=79923886105&pickType=COU_PICK&q=%EC%97%90%EC%8A%A4%ED%8A%B8%EB%9D%BC+%EC%95%84%ED%86%A0%EB%B2%A0%EB%A6%AC%EC%96%B4+%ED%81%AC%EB%A6%BC&itemsCount=27&searchId=f2882ff1757375&rank=0&searchRank=0&isAddedCart="
      }
    ]
  },

  "건성 4번": {
    id: 4,
    name: "건성 4번",
    description: "건성 4번 타입 피부는 건성이지만 착색도가 낮아 비교적 균일한 피부 톤을 유지하는 유형입니다. 보습과 수분 공급을 통해 건조함을 예방하는 것이 중요합니다. 나이아신아마이드나 판테놀 등의 피부 장벽 강화 성분이 포함된 제품을 사용하는 것이 좋습니다. 자외선 차단제를 꾸준히 사용하여 피부 손상을 방지하고, 수분 공급과 영양을 위한 고보습 크림이나 세럼을 함께 사용하면 피부의 탄력과 윤기를 유지할 수 있습니다.",
    products: [
      {
        type: "수분크림",
        name: "일리윤 히알루론 모이스춰 수분크림, 100ml",
        price: "23,000원",
        image: "https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/651764214736601-c7e98ef3-11a2-4e1e-8e63-d84554916565.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/1176713569?itemId=2155653933&vendorItemId=70153899684&pickType=COU_PICK&q=%EC%88%98%EB%B6%84%ED%81%AC%EB%A6%BC&itemsCount=27&searchId=90649c144080473&rank=1&searchRank=2&isAddedCart="
      },
      {
        type: "앰플",
        name: "이니스프리 레티놀 시카 흔적 케어 앰플, 50ml",
        price: "25,000원",
        image: "https://thumbnail10.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/9b45/6018a00387f47061e7c14ae3df48618ac2ccf1d8e6da7c5cd10c43978496.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/7589230991?itemId=17990551682&vendorItemId=85147127936&q=%EC%9D%B4%EB%8B%88%EC%8A%A4%ED%94%84%EB%A6%AC+%EB%A0%88%ED%8B%B0%EB%86%80+%EC%95%B0%ED%94%8C&itemsCount=27&searchId=919bba9f3464461&rank=3&searchRank=6&isAddedCart="
      },
      {
        type: "크림(밤)",
        name: "라로슈포제 NEW 시카플라스트 밤 B5+ 크림, 40ml",
        price: "26,500원",
        image: "https://thumbnail7.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/1396603848785386-845ff6be-3c8f-4638-a23c-211497ebcf8a.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/7966714601?itemId=22048953474&vendorItemId=83358381384&pickType=COU_PICK&q=%EB%9D%BC%EB%A1%9C%EC%8A%88%ED%8F%AC%EC%A0%9C+%EC%8B%9C%EC%B9%B4%ED%94%8C%EB%9D%BC%EC%8A%A4%ED%8A%B8+%EB%B0%A4+b5&itemsCount=27&searchId=ff6128c92863216&rank=1&searchRank=1&isAddedCart="
      }
    ]
  },
  
  // 중성 타입들
  "중성 1번": {
    id: 5,
    name: "중성 1번",
    description: "중성 1번 타입 피부는 유분과 수분의 균형이 잘 맞아 있기 때문에, 이러한 밸런스를 유지하는 것이 중요합니다. 그러나 피부가 민감해 사용하는 제품에 따라 피부 상태가 크게 달라질 수 있으므로, 화장품 선택에 신중해야 합니다. 만약 맞지 않는 화장품 사용으로 인해 피부에 일시적인 반응이 나타나기 쉬운 유형이며, 이때 적절한 미백 및 관리가 이루어지지 않으면 흔적이 남을 수 있으므로, 초기부터 진정 효과가 있는 화장품을 사용하는 것이 중요합니다. 민감성 피부에 적합한 제품과 나이아신아마이드 성분이 포함된 착색 개선 화장품을 사용하는 것이 좋습니다. 또한, 레티놀 성분은 미백과 피부결 개선에 효과적이지만, 예민한 피부에는 주의가 필요합니다.",
    products: [
      {
        type: "토너",
        name: "토리든 다이브인 저분자 히알루론산 토너",
        price: "25,800원",
        image: "https://thumbnail7.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/b5db/4c7f65b69774cf72ab61df41b4bcc424f93f7e00e1ee8a66ff542647edc4.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/8335072689?itemId=21525323324&vendorItemId=88578723599&q=%ED%86%A0%EB%A6%AC%EB%93%A0+%EB%8B%A4%EC%9D%B4%EB%B8%8C%EC%9D%B8+%EC%A0%80%EB%B6%84%EC%9E%90+%ED%9E%88%EC%95%8C%EB%A3%A8%EB%A1%A0%EC%82%B0+%ED%86%A0%EB%84%88&itemsCount=36&searchId=9de5aa78295832&rank=1&searchRank=1&isAddedCart="
      },
      {
        type: "세럼",
        name: "메디힐 비타민씨 브라이트닝 세럼",
        price: "32,000원",
        image: "https://thumbnail10.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/2024/03/14/15/1/c7234cb1-0843-474d-915e-c3b2b5fc34a5.png",
        purchaseLink: "https://www.coupang.com/vp/products/7755453805?itemId=22001292371&vendorItemId=89048818145&q=%EB%A9%94%EB%94%94%ED%9E%90+%EB%B9%84%ED%83%80%EB%AF%BC%EC%94%A8+%EB%B8%8C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%8B%9D+%EC%95%B0%ED%94%8C&itemsCount=36&searchId=52f08b9e202150&rank=1&searchRank=1&isAddedCart="
      },
      {
        type: "수분 크림",
        name: "에스네이처 아쿠아 스쿠알란 수분크림",
        price: "28,000원",
        image: "https://thumbnail9.coupangcdn.com/thumbnails/remote/320x320ex/image/1025_amir_coupang_oct_80k/4d67/09b753a41b86ffb3e76367ee9342cce0f2256248938e5c6f3f80584be60f.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/7937037375?itemId=23506611248&vendorItemId=91510263718&q=%EC%97%90%EC%8A%A4%EB%84%A4%EC%9D%B4%EC%B2%98+%EC%95%84%EC%BF%A0%EC%95%84+%EC%8A%A4%EC%BF%A0%EC%95%8C%EB%9E%80+%EC%88%98%EB%B6%84%ED%81%AC%EB%A6%BC&itemsCount=36&searchId=c8fb3dc0235856&rank=3&searchRank=3&isAddedCart="
      }
    ]
  },
  
  "중성 2번": {
    id: 6,
    name: "중성 2번",
    description: "중성 2번 피부는 유분과 수분의 균형이 잘 맞는 중성 타입이지만, 착색도가 높아 색소침착이 고민이 될 수 있는 피부 유형입니다. 이러한 피부는 밸런스를 유지하면서도 착색 관리에 중점을 둔 화장품 선택이 중요합니다. 레티놀이나 나이아신아마이드 성분이 포함된 기능성 화장품을 사용하면 미백 및 피부결 개선에 도움이 되며, 피부 개선 효과를 크게 느낄 수 있습니다. 또한, 피부 턴오버 주기에 맞춰 자신에게 적합한 화장품을 찾아 꾸준히 사용하는 것이 필요합니다. 외출 시에는 자외선 차단제를 철저히 발라 색소침착이 더 심해지지 않도록 주의하는 것도 중요합니다.",
    products: [
      {
        type: "토너",
        name: "바이오더마 하이드라비오 토너 500ml",
        price: "16,000원",
        image: "https://thumbnail9.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/bdd9/0c63abb6c83f9b29b0f2245013f9007121e758ba04180a77c585aec56d88.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/6855816406?itemId=21440606066&vendorItemId=88061285716&q=%EB%B0%94%EC%9D%B4%EC%98%A4%EB%8D%94%EB%A7%88+%ED%86%A0%EB%84%88&itemsCount=36&searchId=0af0c6b5218506&rank=1&searchRank=1&isAddedCart="
      },
      {
        type: "앰플",
        name: "토리든 다이브인 저분자 히알루론산 세럼 40ml",
        price: "19,800원",
        image: "https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/4b22/bbb850ea01f44e33d0475b2fd5d578937d0c67a2082fdb6d8933ec1c47a2.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/6685577070?itemId=18520092364&vendorItemId=91749104444&q=%ED%86%A0%EB%A6%AC%EB%93%A0+%EC%84%B8%EB%9F%BC&itemsCount=36&searchId=8bd12101460952&rank=1&searchRank=1&isAddedCart="
      },
      {
        type: "수분크림",
        name: "에스트라 아토베리어 365 하이드로 수딩 크림",
        price: "21,000원",
        image: "https://thumbnail10.coupangcdn.com/thumbnails/remote/320x320ex/image/1025_amir_coupang_oct_80k/8e22/38117f31fb6fc0fa1574336e525c25b7c06940280513ab08821d5b9bb9b3.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/5569921264?itemId=18195514395&vendorItemId=86293668349&pickType=COU_PICK&q=%EC%97%90%EC%8A%A4%ED%8A%B8%EB%9D%BC+%EC%95%84%ED%86%A0%EB%B2%A0%EB%A6%AC%EC%96%B4+%ED%95%98%EC%9D%B4%EB%93%9C%EB%A1%9C+%EC%88%98%EB%94%A9%ED%81%AC%EB%A6%BC&itemsCount=36&searchId=005f2a5a691306&rank=0&searchRank=0&isAddedCart="
      }
    ]
  },
  
  "중성 3번": {
    id: 7,
    name: "중성 3번",
    description: "중성 3번 피부는 유분과 수분의 균형이 잘 맞아 있어 이러한 밸런스를 유지하는 것이 중요합니다. 그러나 피부가 민감해 사용하는 제품에 따라 피부 상태가 크게 달라질 수 있으므로, 화장품 선택에 신중해야 합니다. 특히 맞지 않는 화장품을 사용했을 때 피부에 일시적인 반응이 나타날 수 있으며, 적절한 미백 및 관리가 이루어지지 않으면 흔적이 남을 수 있습니다. 따라서 초기부터 진정 효과가 있는 화장품을 사용해 피부를 보호하는 것이 중요합니다. 민감성 피부에 적합한 제품을 사용하는 꾸준한 관리가 필요합니다.",
    products: [
      {
        type: "토너",
        name: "브링그린 티트리 시카 수딩 토너",
        price: "27,000원",
        image: "https://thumbnail7.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/8a22/6f769e1aecc74400599236be3026698c1873d03f4fac3820cb00a5c87696.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/8197130662?itemId=22316716728&vendorItemId=92146862085&q=%EB%B8%8C%EB%A7%81%EA%B7%B8%EB%A6%B0+%ED%8B%B0%ED%8A%B8%EB%A6%AC+%EC%8B%9C%EC%B9%B4+%EC%88%98%EB%94%A9+%ED%86%A0%EB%84%88&itemsCount=36&searchId=896d5fb2514879&rank=1&searchRank=1&isAddedCart="
      },
      {
        type: "세럼",
        name: "바이오더마 하이드라바이오 세럼",
        price: "31,000원",
        image: "https://thumbnail10.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/6e3c/38df51cf57be588c8fe47e2dfe0968e66cf9e9ba8bd61abf833e49e5305e.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/40758?itemId=24191421516&vendorItemId=91209147200&q=%EB%B0%94%EC%9D%B4%EC%98%A4%EB%8D%94%EB%A7%88+%ED%95%98%EC%9D%B4%EB%93%9C%EB%9D%BC%EB%B9%84%EC%98%A4+%EC%84%B8%EB%9F%BC&itemsCount=36&searchId=1a48ed0f392722&rank=0&searchRank=0&isAddedCart=#sdpReview"
      },
      {
        type: "수분크림",
        name: "닥터지 레드 블레미쉬 시카 수딩 크림",
        price: "22,000원",
        image: "https://thumbnail10.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/12ac/19915f59250539437c649830d95a2f74827aaf95c3c266a1e4ff79afaf2f.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/8133102277?itemId=19073430021&vendorItemId=76144598855&pickType=COU_PICK&q=%EB%8B%A5%ED%84%B0%EC%A7%80+%EB%A0%88%EB%93%9C+%EB%B8%94%EB%A0%88%EB%AF%B8%EC%89%AC+%EC%88%98%EB%94%A9+%ED%81%AC%EB%A6%BC&itemsCount=36&searchId=41c554bd615899&rank=0&searchRank=0&isAddedCart="
      }
    ]
  },
  
  "중성 4번": {
    id: 8,
    name: "중성 4번",
    description: "중성 4번 피부는 유분과 수분의 균형이 잘 맞는 중성 타입으로, 착색도가 낮아 비교적 깨끗한 피부 톤을 유지하고 있는 것이 특징입니다. 그러나 이러한 밸런스를 유지하기 위해서는 피부 관리에 소홀하지 않아야 합니다. 피부 턴오버 주기에 맞춰 자신에게 적합한 화장품을 사용하는 것이 중요하며, 레티놀이나 나이아신아마이드 성분이 포함된 기능성 화장품을 사용하면 피부결 개선과 건강한 광택 유지에 도움이 됩니다. 특히 수분 공급과 자외선 차단을 철저히 하여 피부 손상을 예방하는 것이 좋습니다. 또한, 피부 상태를 주기적으로 점검하여 필요한 경우 미백이나 진정 케어 제품을 보완해 사용하면 더욱 안정적인 피부 컨디션을 유지할 수 있습니다.",
    products: [
      {
        type: "토너",
        name: "바이오더마 하이드라비오 토너 500ml",
        price: "28,000원",
        image: "https://thumbnail9.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/bdd9/0c63abb6c83f9b29b0f2245013f9007121e758ba04180a77c585aec56d88.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/6855816406?itemId=21440606066&vendorItemId=88061285716&q=%EB%B0%94%EC%9D%B4%EC%98%A4%EB%8D%94%EB%A7%88+%ED%86%A0%EB%84%88&itemsCount=36&searchId=0af0c6b5218506&rank=1&searchRank=1&isAddedCart="
      },
      {
        type: "앰플",
        name: "웰라쥬 리얼 히알루로닉 블루 앰플 100ml",
        price: "32,000원",
        image: "https://thumbnail6.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/16e4/b87038fa79cf4286c94c6fdd7c48585044a4711adb0601eeea65220898db.png",
        purchaseLink: "https://www.coupang.com/vp/products/6146620481?itemId=21287117540&vendorItemId=79107118397&pickType=COU_PICK&q=%EC%9B%B0%EB%9D%BC%EC%A5%AC+%EB%A6%AC%EC%96%BC%ED%9E%88%EC%95%8C%EB%A3%A8%EB%A1%9C%EB%8B%89+%EB%B8%94%EB%A3%A8+%EC%95%B0%ED%94%8C+100&itemsCount=36&searchId=616d8e48354744&rank=1&searchRank=1&isAddedCart="
      },
      {
        type: "로션",
        name: "메이크프렘 인테카 수딩크림",
        price: "30,000원",
        image: "https://thumbnail6.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/3ab1/14ce2d718b2d74d0d8756043c2a6e085a8f4010e8c8d06b58e01b0d65ece.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/6962043659?itemId=16952734087&vendorItemId=80642687323&q=%EB%A9%94%EC%9D%B4%ED%81%AC%ED%94%84%EB%A0%98+%EC%9D%B8%ED%85%8C%EC%B9%B4+%EC%88%98%EB%94%A9%ED%81%AC%EB%A6%BC&itemsCount=36&searchId=648cadfd358389&rank=0&searchRank=0&isAddedCart="
      }
    ]
  },
  
  // 지성 타입들
  "지성 1번": {
    id: 9,
    name: "지성 1번",
    description: "지성 1번 타입의 피부는 피지 분비량이 많아 유분기로 인한 고민이 생기기 쉬운 피부 유형입니다. 피부 반응이 민감하기 때문에 사용하는 제품에 따라 피부 상태가 크게 좌우되므로, 화장품 선택에 신중을 기해야 합니다. 또한 여드름 상처나 뾰루지 자국이 남아 착색 관리도 필요합니다. 민감성 피부에 적합한 제품과 나이아신아마이드 성분이 포함된 착색 개선 화장품을 사용하는 것이 좋습니다. 레티놀 성분은 미백 및 피부결 개선에 도움이 될 수 있지만, 예민한 피부에는 주의가 필요합니다.",
    products: [
      {
        type: "토너",
        name: "반코르 포어 타이트닝 토너",
        price: "25,800원",
        image: "https://thumbnail7.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/e075/5351c24bf7b5138c1c6d224c8d74578300ff8ff0941835dab4d78138e03a.JPG",
        purchaseLink: "https://www.coupang.com/vp/products/6087628063?itemId=18414065293&vendorItemId=91141629636&q=%EB%B0%98%EC%BD%94%EB%A5%B4+%ED%8F%AC%EC%96%B4+%ED%83%80%EC%9D%B4%ED%8A%B8%EB%8B%9D+%ED%86%A0%EB%84%88&itemsCount=36&searchId=566aa25a876336&rank=2&searchRank=2&isAddedCart="
      },
      {
        type: "에센스",
        name: "에뛰드 수분가득 콜라겐 에센스",
        price: "28,000원",
        image: "https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/849162847060635-c492ffa7-503a-4718-b054-6330c9b25519.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/6090103814?itemId=11347309059&vendorItemId=78380449267&pickType=COU_PICK&q=%EC%97%90%EB%9B%B0%EB%93%9C+%EC%88%98%EB%B6%84%EA%B0%80%EB%93%9D+%EC%BD%9C%EB%9D%BC%EA%B2%90+%EC%97%90%EC%84%BC%EC%8A%A4&itemsCount=35&searchId=136fdc241233571&rank=1&searchRank=1&isAddedCart="
      },
      {
        type: "로션",
        name: "반코르 오레가노 히알루론산 영양 수분로션 모이스트 로션",
        price: "26,000원",
        image: "https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/af88/663700b5a7b9d7240672c2314b22b5452e9d436ea4dd91d18d9bac9897c4.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/7073145986?itemId=17571441271&vendorItemId=88716644618&q=%EB%B0%98%EC%BD%94%EB%A5%B4+%EB%A1%9C%EC%85%98&itemsCount=36&searchId=672319491319928&rank=0&searchRank=0&isAddedCart="
      }
    ]
  },
  
  "지성 2번": {
    id: 10,
    name: "지성 2번",
    description: "지성 2번 타입의 피부는 피지 분비량이 많아 유분기로 인한 고민이 생기기 쉬운 피부 유형입니다. 피지 때문에 모공이 막혀 여드름이나 일시적인 뾰루지가 발생하기 쉬우므로, 세안에 신경을 쓰며 피부 관리를 해야 합니다. 특히 여드름이 생긴 후 적절한 미백 및 관리가 이루어지지 않으면 흔적이 영구적으로 남을 수 있으므로, 비위생적으로 여드름을 짜지 않고 초기부터 패치나 진정용 화장품을 사용하는 것이 중요합니다. 예방 뿐만 아니라 사후 관리에도 주의를 기울여야 합니다. 2번 타입의 경우 세안과 여드름 관리만 잘해도 피부 개선 효과를 확실히 느낄 수 있습니다.",
    products: [
      {
        type: "토너",
        name: "유세린 토너",
        price: "21,000원",
        image: "https://thumbnail6.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/b484/356dd22bf3d100d240901deddf8d431518a4b9c9b0f9b51e88ebf00b21ef.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/1879189716?itemId=22705463963&vendorItemId=4570032642&q=%EC%9C%A0%EC%84%B8%EB%A6%B0+%ED%86%A0%EB%84%88&itemsCount=36&searchId=21dd1cf01295515&rank=0&searchRank=0&isAddedCart="
      },
      {
        type: "세럼",
        name: "반코르 바쿠치올 세럼",
        price: "25,000원",
        image: "https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/055d/380ff9ca7cf037577ea52c3509eade8f2b57fe1562f8c898eca471d706ad.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/7566840568?itemId=19947257540&vendorItemId=87046315201&pickType=COU_PICK&q=%EB%B0%98%EC%BD%94%EB%A5%B4+%ED%94%84%EB%A1%9C%ED%8F%B4%EB%A6%AC%EC%8A%A4+%EB%89%B4%ED%8A%B8%EB%A6%AC%EC%85%98+%EC%84%B8%EB%9F%BC&itemsCount=36&searchId=eb328ab61301982&rank=6&searchRank=6&isAddedCart="
      },
      {
        type: "로션",
        name: "에뛰드 하우스 수분가득 콜라겐 로션",
        price: "18,000원",
        image: "https://thumbnail6.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/2ab7/017baa0e2e6bb1e412e861cc237fcf8d35bd0312f1a3420dee9b41ee4da0.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/6053379970?itemId=18519574896&vendorItemId=85658255581&q=%EC%97%90%EB%9B%B0%EB%93%9C+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%88%98%EB%B6%84%EA%B0%80%EB%93%9D+%EC%BD%9C%EB%9D%BC%EA%B2%90+%EB%A1%9C%EC%85%98&itemsCount=36&searchId=7b4b53041315592&rank=2&searchRank=2&isAddedCart="
      }
    ]
  },
  
  "지성 3번": {
    id: 11,
    name: "지성 3번",
    description: "지성 3번 타입 피부는 피지 분비량이 많아 유분기로 고민이 생기기 쉬운 유형입니다. 또한 피부가 민감하여 사용하는 제품에 따라 피부 상태가 크게 달라질 수 있으므로, 화장품 선택에 신중해야 합니다. 지용성과 민감성을 동시에 고려한 전용 화장품을 사용하는 것이 추천됩니다. 레티놀 성분은 미백 및 피부결 개선에 효과적일 수 있지만, 예민한 피부에는 주의가 필요합니다. 세안 시 피부가 지나치게 건조해지지 않도록 미온수로 세안한 후 즉시 수분을 보충해 주는 것이 중요합니다.",
    products: [
      {
        type: "토너",
        name: "에뛰드 약산성 토너",
        price: "22,000원",
        image: "https://thumbnail7.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/948214328978507-6c75d58d-05c4-480a-9e3c-037578cd34d7.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/18359349?itemId=19517433245&vendorItemId=86626147853&pickType=COU_PICK&q=에뛰드+약산성+토너&itemsCount=36&searchId=b42839c91328378&rank=0&searchRank=0&isAddedCart="
      },
      {
        type: "세럼",
        name: "이솔 프로폴리스 세럼",
        price: "33,000원",
        image: "https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/2024/10/04/11/0/617bae2b-6825-4605-884d-66998eec061f.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/2127631379?itemId=3611246590&vendorItemId=91232181736&q=%EC%9D%B4%EC%86%94+%ED%94%84%EB%A1%9C%ED%8F%B4%EB%A6%AC%EC%8A%A4+%EC%84%B8%EB%9F%BC&itemsCount=36&searchId=d73619811332763&rank=0&searchRank=0&isAddedCart="
      },
      {
        type: "수분크림",
        name: "네이처리퍼블릭 슈퍼 아쿠아 맥스 프래시 수분 크림",
        price: "25,000원",
        image: "https://thumbnail7.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/e13b/b7d9b678ed27da65b985819b9d1ccf88bbdf4f38f0aca100c3c02c20d792.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/6043410357?itemId=23865570521&vendorItemId=90962422773&q=%EC%8A%88%ED%8D%BC+%EC%95%84%EC%BF%A0%EC%95%84+%EB%A7%A5%EC%8A%A4+%ED%94%84%EB%9E%98%EC%8B%9C+%EC%88%98%EB%B6%84+%ED%81%AC%EB%A6%BC&itemsCount=36&searchId=644788a61331490&rank=7&searchRank=7&isAddedCart="
      }
    ]
  },
  
  "지성 4번": {
    id: 12,
    name: "지성 4번",
    description: "지성 4번 타입 피부는 피지 분비량이 많아 유분기로 인한 고민이 생기기 쉬운 피부 유형입니다. 피지로 인해 모공이 막혀 여드름이나 뾰루지가 발생할 수 있으므로, 세안에 특히 신경을 써야 하며 약산성 세안제를 사용하는 것이 좋습니다. 또한, 레티놀이나 나이아신아마이드 성분이 포함된 기능성 화장품을 사용하면 피부 개선 효과를 크게 느낄 수 있습니다. 피부 턴오버 주기에 맞춰 자신에게 적합한 화장품을 찾아가는 꾸준한 관리가 필요합니다.",
    products: [
      {
        type: "클렌징 폼",
        name: "어퓨 딥 클린 폼렌저",
        price: "16,000원",
        image: "https://thumbnail7.coupangcdn.com/thumbnails/remote/320x320ex/image/1025_amir_coupang_oct_80k/48e7/437567365d8a8d702b12c7fcb0f1dc836ba54a09fb26e313d96cbe8987fd.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/7851917485?itemId=21403698932&vendorItemId=88460286652&q=어퓨+티트리+클렌징&itemsCount=36&searchId=2d4d344d1345330&rank=1&searchRank=1&isAddedCart="
      },
      {
        type: "토너",
        name: "어퓨 마데카소사이트 플루이드",
        price: "20,000원",
        image: "https://thumbnail9.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/27ac/565954fb96bb683c61e78b571df6e9b7bfadda5b3812d47b07ae304d7219.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/7270815575?itemId=17647498535&vendorItemId=84813112588&q=어퓨+마데카소사이트+플루이드&itemsCount=36&searchId=0e6070071350538&rank=1&searchRank=1&isAddedCart="
      },
      {
        type: "스킨",
        name: "이니스프리 그린티 스킨",
        price: "27,000원",
        image: "https://thumbnail7.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/1415221047088426-1fa0a363-c978-443c-9bd3-b3822684c656.jpg",
        purchaseLink: "https://www.coupang.com/vp/products/8441813408?itemId=20863795649&vendorItemId=85145850026&pickType=COU_PICK&q=이니스프리+그린티+스킨&itemsCount=36&searchId=cfd577e61006903&rank=0&searchRank=0&isAddedCart="
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