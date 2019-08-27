#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDynamicBehavior_symbols(JSContext*);
@protocol UIDynamicItemGroupInstanceExports<JSExport, UIDynamicItemInstanceExports_>
@property (readonly,copy,nonatomic) NSArray * items;
JSExportAs(initWithItems,
-(id) jsinitWithItems: (NSArray *) items );
@end
@protocol UIDynamicItemGroupClassExports<JSExport, UIDynamicItemClassExports_>
@end
@protocol UIDynamicBehaviorInstanceExports<JSExport>
@property (getter=getJsAction,setter=setJsAction:) JSValue* jsaction;
@property (readonly,copy,nonatomic) NSArray * childBehaviors;
@property (readonly,nonatomic) UIDynamicAnimator * dynamicAnimator;
-(void) willMoveToAnimator: (UIDynamicAnimator *) dynamicAnimator ;
-(void) removeChildBehavior: (UIDynamicBehavior *) behavior ;
-(void) addChildBehavior: (UIDynamicBehavior *) behavior ;
@end
@protocol UIDynamicBehaviorClassExports<JSExport>
@end
@protocol UIDynamicItemInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) UIDynamicItemCollisionBoundsType collisionBoundsType;
@property (readonly,nonatomic) UIBezierPath * collisionBoundingPath;
@property (readwrite,nonatomic) CGAffineTransform transform;
@property (readwrite,nonatomic) CGPoint center;
@property (readonly,nonatomic) CGRect bounds;
@end
@protocol UIDynamicItemClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop