#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UICollectionViewLayout_symbols(JSContext*);
@protocol UICollectionViewLayoutUIUpdateSupportHooksCategoryInstanceExports<JSExport>
-(UICollectionViewLayoutAttributes *) finalLayoutAttributesForDisappearingSupplementaryElementOfKind: (NSString *) elementKind atIndexPath: (NSIndexPath *) elementIndexPath ;
-(void) prepareForTransitionToLayout: (UICollectionViewLayout *) newLayout ;
JSExportAs(initialLayoutAttributesForAppearingSupplementaryElementOfKindAtIndexPath,
-(UICollectionViewLayoutAttributes *) jsinitialLayoutAttributesForAppearingSupplementaryElementOfKind: (NSString *) elementKind atIndexPath: (NSIndexPath *) elementIndexPath );
-(void) finalizeCollectionViewUpdates;
-(void) prepareForCollectionViewUpdates: (NSArray *) updateItems ;
-(void) finalizeAnimatedBoundsChange;
JSExportAs(initialLayoutAttributesForAppearingDecorationElementOfKindAtIndexPath,
-(UICollectionViewLayoutAttributes *) jsinitialLayoutAttributesForAppearingDecorationElementOfKind: (NSString *) elementKind atIndexPath: (NSIndexPath *) decorationIndexPath );
-(UICollectionViewLayoutAttributes *) finalLayoutAttributesForDisappearingItemAtIndexPath: (NSIndexPath *) itemIndexPath ;
-(NSArray *) indexPathsToDeleteForSupplementaryViewOfKind: (NSString *) elementKind ;
-(void) prepareForTransitionFromLayout: (UICollectionViewLayout *) oldLayout ;
-(NSArray *) indexPathsToInsertForSupplementaryViewOfKind: (NSString *) elementKind ;
-(void) prepareForAnimatedBoundsChange: (CGRect) oldBounds ;
-(NSArray *) indexPathsToDeleteForDecorationViewOfKind: (NSString *) elementKind ;
-(UICollectionViewLayoutAttributes *) finalLayoutAttributesForDisappearingDecorationElementOfKind: (NSString *) elementKind atIndexPath: (NSIndexPath *) decorationIndexPath ;
-(NSArray *) indexPathsToInsertForDecorationViewOfKind: (NSString *) elementKind ;
-(void) finalizeLayoutTransition;
JSExportAs(initialLayoutAttributesForAppearingItemAtIndexPath,
-(UICollectionViewLayoutAttributes *) jsinitialLayoutAttributesForAppearingItemAtIndexPath: (NSIndexPath *) itemIndexPath );
@end
@protocol UICollectionViewLayoutUIUpdateSupportHooksCategoryClassExports<JSExport>
@end
@protocol UICollectionViewLayoutInstanceExports<JSExport, NSCodingInstanceExports_>
@property (readonly,nonatomic) UICollectionView * collectionView;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(void) invalidateLayoutWithContext: (UICollectionViewLayoutInvalidationContext *) context ;
-(id) jsinit;
-(void) registerNib: (UINib *) nib forDecorationViewOfKind: (NSString *) elementKind ;
-(void) invalidateLayout;
JSExportAs(registerClassForDecorationViewOfKind,
-(void) jsregisterClass: (JSValue *) viewClass forDecorationViewOfKind: (NSString *) elementKind );
@end
@protocol UICollectionViewLayoutClassExports<JSExport, NSCodingClassExports_>
@end
@protocol UICollectionViewLayoutUIReorderingSupportHooksCategoryInstanceExports<JSExport>
-(NSIndexPath *) targetIndexPathForInteractivelyMovingItem: (NSIndexPath *) previousIndexPath withPosition: (CGPoint) position ;
-(UICollectionViewLayoutInvalidationContext *) invalidationContextForInteractivelyMovingItems: (NSArray *) targetIndexPaths withTargetPosition: (CGPoint) targetPosition previousIndexPaths: (NSArray *) previousIndexPaths previousPosition: (CGPoint) previousPosition ;
-(UICollectionViewLayoutInvalidationContext *) invalidationContextForEndingInteractiveMovementOfItemsToFinalIndexPaths: (NSArray *) indexPaths previousIndexPaths: (NSArray *) previousIndexPaths movementCancelled: (BOOL) movementCancelled ;
-(UICollectionViewLayoutAttributes *) layoutAttributesForInteractivelyMovingItemAtIndexPath: (NSIndexPath *) indexPath withTargetPosition: (CGPoint) position ;
@end
@protocol UICollectionViewLayoutUIReorderingSupportHooksCategoryClassExports<JSExport>
@end
@protocol UICollectionViewLayoutAttributesInstanceExports<JSExport, NSCopyingInstanceExports_, UIDynamicItemInstanceExports_>
@property (nonatomic,strong) NSIndexPath * indexPath;
@property (nonatomic) CGPoint center;
@property (nonatomic) CGRect frame;
@property (nonatomic) CGAffineTransform transform;
@property (nonatomic) CGRect bounds;
@property (nonatomic) NSInteger zIndex;
@property (nonatomic) CATransform3D transform3D;
@property (nonatomic) CGFloat alpha;
@property (getter=isHidden,nonatomic) BOOL hidden;
@property (readonly,nonatomic) UICollectionElementCategory representedElementCategory;
@property (readonly,nonatomic) NSString * representedElementKind;
@property (nonatomic) CGSize size;
@end
@protocol UICollectionViewLayoutAttributesClassExports<JSExport, NSCopyingClassExports_, UIDynamicItemClassExports_>
+(id) layoutAttributesForCellWithIndexPath: (NSIndexPath *) indexPath ;
+(id) layoutAttributesForDecorationViewOfKind: (NSString *) decorationViewKind withIndexPath: (NSIndexPath *) indexPath ;
+(id) layoutAttributesForSupplementaryViewOfKind: (NSString *) elementKind withIndexPath: (NSIndexPath *) indexPath ;
@end
@protocol UICollectionViewLayoutUISubclassingHooksCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) CGSize collectionViewContentSize;
@property (readonly,nonatomic) BOOL flipsHorizontallyInOppositeLayoutDirection;
@property (readonly,nonatomic) UIUserInterfaceLayoutDirection developmentLayoutDirection;
-(UICollectionViewLayoutInvalidationContext *) invalidationContextForPreferredLayoutAttributes: (UICollectionViewLayoutAttributes *) preferredAttributes withOriginalAttributes: (UICollectionViewLayoutAttributes *) originalAttributes ;
-(BOOL) shouldInvalidateLayoutForPreferredLayoutAttributes: (UICollectionViewLayoutAttributes *) preferredAttributes withOriginalAttributes: (UICollectionViewLayoutAttributes *) originalAttributes ;
-(BOOL) shouldInvalidateLayoutForBoundsChange: (CGRect) newBounds ;
-(CGPoint) targetContentOffsetForProposedContentOffset: (CGPoint) proposedContentOffset withScrollingVelocity: (CGPoint) velocity ;
-(CGPoint) targetContentOffsetForProposedContentOffset: (CGPoint) proposedContentOffset ;
-(void) prepareLayout;
-(NSArray *) layoutAttributesForElementsInRect: (CGRect) rect ;
-(UICollectionViewLayoutInvalidationContext *) invalidationContextForBoundsChange: (CGRect) newBounds ;
-(UICollectionViewLayoutAttributes *) layoutAttributesForDecorationViewOfKind: (NSString *) elementKind atIndexPath: (NSIndexPath *) indexPath ;
-(UICollectionViewLayoutAttributes *) layoutAttributesForSupplementaryViewOfKind: (NSString *) elementKind atIndexPath: (NSIndexPath *) indexPath ;
-(UICollectionViewLayoutAttributes *) layoutAttributesForItemAtIndexPath: (NSIndexPath *) indexPath ;
@end
@protocol UICollectionViewLayoutUISubclassingHooksCategoryClassExports<JSExport>
+(id) layoutAttributesClass;
+(id) invalidationContextClass;
@end
@protocol UICollectionViewLayoutInvalidationContextInstanceExports<JSExport>
@property (readonly,nonatomic) BOOL invalidateEverything;
@property (readonly,copy,nonatomic) NSArray * previousIndexPathsForInteractivelyMovingItems;
@property (readonly,copy,nonatomic) NSArray * targetIndexPathsForInteractivelyMovingItems;
@property (readonly,nonatomic) NSDictionary * invalidatedSupplementaryIndexPaths;
@property (readonly,nonatomic) CGPoint interactiveMovementTarget;
@property (readonly,nonatomic) NSArray * invalidatedItemIndexPaths;
@property (nonatomic) CGPoint contentOffsetAdjustment;
@property (nonatomic) CGSize contentSizeAdjustment;
@property (readonly,nonatomic) NSDictionary * invalidatedDecorationIndexPaths;
@property (readonly,nonatomic) BOOL invalidateDataSourceCounts;
-(void) invalidateItemsAtIndexPaths: (NSArray *) indexPaths ;
-(void) invalidateDecorationElementsOfKind: (NSString *) elementKind atIndexPaths: (NSArray *) indexPaths ;
-(void) invalidateSupplementaryElementsOfKind: (NSString *) elementKind atIndexPaths: (NSArray *) indexPaths ;
@end
@protocol UICollectionViewLayoutInvalidationContextClassExports<JSExport>
@end
@protocol UICollectionViewUpdateItemInstanceExports<JSExport>
@property (readonly,nonatomic) NSIndexPath * indexPathBeforeUpdate;
@property (readonly,nonatomic) NSIndexPath * indexPathAfterUpdate;
@property (readonly,nonatomic) UICollectionUpdateAction updateAction;
@end
@protocol UICollectionViewUpdateItemClassExports<JSExport>
@end
#pragma clang diagnostic pop