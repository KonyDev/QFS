#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UICollisionBehavior_symbols(JSContext*);
@protocol UICollisionBehaviorInstanceExports<JSExport>
@property (readonly,copy,nonatomic) NSArray * items;
@property (readwrite,nonatomic) BOOL translatesReferenceBoundsIntoBoundary;
@property (readwrite,nonatomic) UICollisionBehaviorMode collisionMode;
@property (readonly,copy,nonatomic) NSArray * boundaryIdentifiers;
@property (readwrite,nonatomic,weak) id collisionDelegate;
-(void) removeItem: (id) item ;
-(void) setTranslatesReferenceBoundsIntoBoundaryWithInsets: (UIEdgeInsets) insets ;
-(UIBezierPath *) boundaryWithIdentifier: (id) identifier ;
JSExportAs(initWithItems,
-(id) jsinitWithItems: (NSArray *) items );
-(void) removeAllBoundaries;
-(void) removeBoundaryWithIdentifier: (id) identifier ;
-(void) addItem: (id) item ;
-(void) addBoundaryWithIdentifier: (id) identifier fromPoint: (CGPoint) p1 toPoint: (CGPoint) p2 ;
-(void) addBoundaryWithIdentifier: (id) identifier forPath: (UIBezierPath *) bezierPath ;
@end
@protocol UICollisionBehaviorClassExports<JSExport>
@end
@protocol UICollisionBehaviorDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) collisionBehavior: (UICollisionBehavior *) behavior endedContactForItem: (id) item1 withItem: (id) item2 ;
-(void) collisionBehavior: (UICollisionBehavior *) behavior beganContactForItem: (id) item withBoundaryIdentifier: (id) identifier atPoint: (CGPoint) p ;
-(void) collisionBehavior: (UICollisionBehavior *) behavior beganContactForItem: (id) item1 withItem: (id) item2 atPoint: (CGPoint) p ;
-(void) collisionBehavior: (UICollisionBehavior *) behavior endedContactForItem: (id) item withBoundaryIdentifier: (id) identifier ;
@end
@protocol UICollisionBehaviorDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop