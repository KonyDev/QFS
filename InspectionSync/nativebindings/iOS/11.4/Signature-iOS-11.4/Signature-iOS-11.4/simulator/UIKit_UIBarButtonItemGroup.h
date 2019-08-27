#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIBarButtonItemGroup_symbols(JSContext*);
@protocol UIBarButtonItemGroupInstanceExports<JSExport, NSCodingInstanceExports_>
@property (getter=isDisplayingRepresentativeItem,readonly,assign,nonatomic) BOOL displayingRepresentativeItem;
@property (readwrite,nonatomic,strong) UIBarButtonItem * representativeItem;
@property (readwrite,copy,nonatomic) NSArray * barButtonItems;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(initWithBarButtonItemsRepresentativeItem,
-(id) jsinitWithBarButtonItems: (NSArray *) barButtonItems representativeItem: (UIBarButtonItem *) representativeItem );
@end
@protocol UIBarButtonItemGroupClassExports<JSExport, NSCodingClassExports_>
@end
@protocol UIBarButtonItemUIBarButtonItemGroupCategoryInstanceExports<JSExport>
@property (readonly,nonatomic,weak) UIBarButtonItemGroup * buttonGroup;
@end
@protocol UIBarButtonItemUIBarButtonItemGroupCategoryClassExports<JSExport>
@end
#pragma clang diagnostic pop