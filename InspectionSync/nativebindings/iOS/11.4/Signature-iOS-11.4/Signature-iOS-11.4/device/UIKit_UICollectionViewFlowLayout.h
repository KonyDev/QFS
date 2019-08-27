#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UICollectionViewFlowLayout_symbols(JSContext*);
@protocol UICollectionViewFlowLayoutInstanceExports<JSExport>
@property (nonatomic) CGSize footerReferenceSize;
@property (nonatomic) CGSize estimatedItemSize;
@property (nonatomic) UICollectionViewFlowLayoutSectionInsetReference sectionInsetReference;
@property (nonatomic) CGFloat minimumInteritemSpacing;
@property (nonatomic) UIEdgeInsets sectionInset;
@property (nonatomic) CGSize headerReferenceSize;
@property (nonatomic) CGFloat minimumLineSpacing;
@property (nonatomic) BOOL sectionFootersPinToVisibleBounds;
@property (nonatomic) BOOL sectionHeadersPinToVisibleBounds;
@property (nonatomic) CGSize itemSize;
@property (nonatomic) UICollectionViewScrollDirection scrollDirection;
@end
@protocol UICollectionViewFlowLayoutClassExports<JSExport>
@end
@protocol UICollectionViewFlowLayoutInvalidationContextInstanceExports<JSExport>
@property (nonatomic) BOOL invalidateFlowLayoutDelegateMetrics;
@property (nonatomic) BOOL invalidateFlowLayoutAttributes;
@end
@protocol UICollectionViewFlowLayoutInvalidationContextClassExports<JSExport>
@end
@protocol UICollectionViewDelegateFlowLayoutInstanceExports_<JSExport, UICollectionViewDelegateInstanceExports_>
-(CGFloat) collectionView: (UICollectionView *) collectionView layout: (UICollectionViewLayout *) collectionViewLayout minimumInteritemSpacingForSectionAtIndex: (NSInteger) section ;
-(UIEdgeInsets) collectionView: (UICollectionView *) collectionView layout: (UICollectionViewLayout *) collectionViewLayout insetForSectionAtIndex: (NSInteger) section ;
-(CGSize) collectionView: (UICollectionView *) collectionView layout: (UICollectionViewLayout *) collectionViewLayout sizeForItemAtIndexPath: (NSIndexPath *) indexPath ;
-(CGFloat) collectionView: (UICollectionView *) collectionView layout: (UICollectionViewLayout *) collectionViewLayout minimumLineSpacingForSectionAtIndex: (NSInteger) section ;
-(CGSize) collectionView: (UICollectionView *) collectionView layout: (UICollectionViewLayout *) collectionViewLayout referenceSizeForFooterInSection: (NSInteger) section ;
-(CGSize) collectionView: (UICollectionView *) collectionView layout: (UICollectionViewLayout *) collectionViewLayout referenceSizeForHeaderInSection: (NSInteger) section ;
@end
@protocol UICollectionViewDelegateFlowLayoutClassExports_<JSExport, UICollectionViewDelegateClassExports_>
@end
#pragma clang diagnostic pop