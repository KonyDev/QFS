#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDynamicAnimator_symbols(JSContext*);
@protocol UIDynamicAnimatorUICollectionViewAdditionsCategoryInstanceExports<JSExport>
-(UICollectionViewLayoutAttributes *) layoutAttributesForSupplementaryViewOfKind: (NSString *) kind atIndexPath: (NSIndexPath *) indexPath ;
JSExportAs(initWithCollectionViewLayout,
-(id) jsinitWithCollectionViewLayout: (UICollectionViewLayout *) layout );
-(UICollectionViewLayoutAttributes *) layoutAttributesForCellAtIndexPath: (NSIndexPath *) indexPath ;
-(UICollectionViewLayoutAttributes *) layoutAttributesForDecorationViewOfKind: (NSString *) decorationViewKind atIndexPath: (NSIndexPath *) indexPath ;
@end
@protocol UIDynamicAnimatorUICollectionViewAdditionsCategoryClassExports<JSExport>
@end
@protocol UIDynamicAnimatorInstanceExports<JSExport>
@property (readonly,copy,nonatomic) NSArray * behaviors;
@property (readonly,nonatomic) NSTimeInterval elapsedTime;
@property (getter=isRunning,readonly,nonatomic) BOOL running;
@property (readonly,nonatomic) UIView * referenceView;
@property (nonatomic,weak) id delegate;
JSExportAs(initWithReferenceView,
-(id) jsinitWithReferenceView: (UIView *) view );
-(void) updateItemUsingCurrentState: (id) item ;
-(NSArray *) itemsInRect: (CGRect) rect ;
-(void) removeAllBehaviors;
-(void) addBehavior: (UIDynamicBehavior *) behavior ;
-(void) removeBehavior: (UIDynamicBehavior *) behavior ;
@end
@protocol UIDynamicAnimatorClassExports<JSExport>
@end
@protocol UIDynamicAnimatorDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) dynamicAnimatorDidPause: (UIDynamicAnimator *) animator ;
-(void) dynamicAnimatorWillResume: (UIDynamicAnimator *) animator ;
@end
@protocol UIDynamicAnimatorDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop