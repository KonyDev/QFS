#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDynamicItemBehavior_symbols(JSContext*);
@protocol UIDynamicItemBehaviorInstanceExports<JSExport>
@property (readwrite,nonatomic) CGFloat density;
@property (readonly,copy,nonatomic) NSArray * items;
@property (readwrite,nonatomic) CGFloat resistance;
@property (readwrite,nonatomic) CGFloat friction;
@property (readwrite,nonatomic) CGFloat elasticity;
@property (getter=isAnchored,nonatomic) BOOL anchored;
@property (readwrite,nonatomic) CGFloat charge;
@property (readwrite,nonatomic) CGFloat angularResistance;
@property (readwrite,nonatomic) BOOL allowsRotation;
JSExportAs(initWithItems,
-(id) jsinitWithItems: (NSArray *) items );
-(void) addLinearVelocity: (CGPoint) velocity forItem: (id) item ;
-(CGFloat) angularVelocityForItem: (id) item ;
-(CGPoint) linearVelocityForItem: (id) item ;
-(void) addItem: (id) item ;
-(void) addAngularVelocity: (CGFloat) velocity forItem: (id) item ;
-(void) removeItem: (id) item ;
@end
@protocol UIDynamicItemBehaviorClassExports<JSExport>
@end
#pragma clang diagnostic pop